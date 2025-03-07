import React from "react";

const AssignmentDetails = ({ assignment }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{assignment.title}</h2>
      <p className="text-gray-600">{assignment.description}</p>
      <p className="text-gray-500">Due Date: {assignment.dueDate}</p>
      <p className="text-gray-500">Instructions: {assignment.instructions}</p>
      <p className="text-gray-500">
        Status: {assignment.status ? "Submitted" : "Not Submitted"}
      </p>
    </div>
  );
};

export default AssignmentDetails;
