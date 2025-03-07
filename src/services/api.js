export const fetchAssignments = async () => {
  const response = await fetch("/mockData.json");
  if (!response.ok) throw new Error("Failed to fetch assignments");
  return response.json();
};

export const submitAssignment = async (assignmentId, submissionData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Assignment submitted successfully!" });
    }, 1000);
  });
};
