import React, { useState } from "react";

const SubmissionForm = ({ assignmentId, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(assignmentId, { name, email, file, comments });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 outline-none"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300  outline-none"
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full p-2 border border-gray-300 rounded cursor-pointer"
        required
      />
      <textarea
        placeholder="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 outline-none"
      />
      <button
        type="submit"
        className="w-full cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Submit Assignment
      </button>
    </form>
  );
};

export default SubmissionForm;
