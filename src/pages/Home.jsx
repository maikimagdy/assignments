import React, { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useNavigate } from "react-router-dom";

const Home = ({ assignments }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("title");

  const filteredAssignments = assignments.filter((assignment) => {
    if (filterBy === "title") {
      return assignment.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterBy === "dueDate") {
      return assignment.dueDate.includes(searchTerm);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-100 px-8 py-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        Assignments
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <input
          type="text"
          placeholder={`Search by ${filterBy}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="w-full bg-white md:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="title">Title</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onClick={() => navigate(`/assignment/${assignment.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
