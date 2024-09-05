import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./StudentList";
import Filters from "./Filters";

const App = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleFilter = (filters) => {
    let filtered = students;

    if (filters.gender) {
      filtered = filtered.filter(
        (student) => student.gender === filters.gender
      );
    }
    if (filters.ageGroup) {
      const [minAge, maxAge] = filters.ageGroup.split("-").map(Number);
      filtered = filtered.filter(
        (student) => student.age >= minAge && student.age <= maxAge
      );
    }
    if (filters.gpa) {
      filtered = filtered.filter((student) => student.gpa >= filters.gpa);
    }
    if (filters.phone) {
      filtered = filtered.filter((student) =>
        student.phone.includes(filters.phone)
      );
    }

    setFilteredStudents(filtered);
  };

  return (
    <div>
      <h1>Student Filter App</h1>
      <Filters onFilter={handleFilter} />
      <StudentList students={filteredStudents} />
    </div>
  );
};

export default App;
