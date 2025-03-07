import React from "react";

const AssignmentCard = ({ assignment, onClick }) => {
  return (
    <div
      className="border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6 cursor-pointer text-gray-800"
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2">{assignment.title}</h3>
      <p className="text-gray-600 mb-2">{assignment.description}</p>
      <p className="text-sm text-gray-700">Due Date: {assignment.dueDate}</p>
      <p
        className={`text-sm font-semibold mt-2 ${
          assignment.status === "Submitted" ? "text-green-500" : "text-red-500"
        }`}
      >
        Status: {assignment.status ? "Submitted" : "Not Submitted"}
      </p>
    </div>
  );
};

export default AssignmentCard;
