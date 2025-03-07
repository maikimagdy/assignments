import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AssignmentDetailPage from "./pages/AssignmentDetailPage";
import { fetchAssignments } from "./services/api";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAssignments = async () => {
      try {
        const data = await fetchAssignments();
        setAssignments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getAssignments();
  }, []);

  const updateAssignmentStatus = (assignmentId, newStatus) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === assignmentId
          ? { ...assignment, status: newStatus }
          : assignment
      )
    );
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
        <LoadingSpinner />
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
        <div>Error: {error}</div>
      </div>
    );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home assignments={assignments} />} />
        <Route
          path="/assignment/:id"
          element={
            <AssignmentDetailPage
              assignments={assignments}
              updateAssignmentStatus={updateAssignmentStatus}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
