import React, { useState } from "react";
import Select from "react-select";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const ageGroupOptions = [
  { value: "18-25", label: "18-25" },
  { value: "26-30", label: "26-30" },
  { value: "31-40", label: "31-40" },
];

const gpaOptions = [
  { value: "0-3.0", label: "0-3.0" },
  { value: "3.1 - 3.5", label: "3.1 - 3.5" },
  { value: "3.5 - 4.0", label: "3.5 - 4.0" },
];

const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    gender: "",
    ageGroup: "",
    gpa: "",
    phone: "",
  });

  const handleSelectChange = (selectedOption, { name }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select
        name="gender"
        value={genderOptions.find((option) => option.value === filters.gender)}
        onChange={handleSelectChange}
        options={genderOptions}
        placeholder="Select Gender"
      />
      <Select
        name="ageGroup"
        value={ageGroupOptions.find(
          (option) => option.value === filters.ageGroup
        )}
        onChange={handleSelectChange}
        options={ageGroupOptions}
        placeholder="Select Age Group"
      />
      <Select
        name="gpa"
        value={gpaOptions.find((option) => option.value === filters.gpa)}
        onChange={handleSelectChange}
        options={gpaOptions}
        placeholder="Select GPA"
      />
      <input
        type="text"
        name="phone"
        value={filters.phone}
        onChange={handleInputChange}
        placeholder="Search by Phone (Optional)"
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filters;
