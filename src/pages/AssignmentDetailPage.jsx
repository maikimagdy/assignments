import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssignmentDetails from "../components/AssignmentDetails";
import SubmissionForm from "../components/SubmissionForm";
import LoadingSpinner from "../components/LoadingSpinner";
import { submitAssignment } from "../services/api";

const AssignmentDetailPage = ({ assignments, updateAssignmentStatus }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [assignment, setAssignment] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchAssignment = () => {
      const foundAssignment = assignments.find((a) => a.id === parseInt(id));
      setAssignment(foundAssignment);
      setLoading(false);
    };

    fetchAssignment();
  }, [id, assignments]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
        <LoadingSpinner />
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
        <h2 className="text-2xl font-semibold text-red-500">
          Assignment not found!
        </h2>
      </div>
    );
  }

  const handleSubmit = async (assignmentId, submissionData) => {
    try {
      const result = await submitAssignment(assignmentId, submissionData);
      alert(result.message);
      updateAssignmentStatus(assignmentId, "Submitted");
      nav("/");
    } catch (err) {
      alert("Submission failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-full sm:max-w-2xl w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
            Assignment Details
          </h1>
          <button
            className="mt-4 sm:mt-0 bg-green-600 font-semibold cursor-pointer text-white rounded-xl w-full sm:w-24 py-2 hover:bg-green-500 transition"
            onClick={() => nav("/")}
          >
            Back
          </button>
        </div>
        <AssignmentDetails assignment={assignment} />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mt-6">
          Submit Your Work
        </h2>
        <SubmissionForm assignmentId={assignment.id} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AssignmentDetailPage;
