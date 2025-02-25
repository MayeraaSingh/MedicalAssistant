import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";
import { UploadCloud } from "lucide-react"; // Import an icon

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Upload failed. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Upload Prescription</h2>
      
      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
        <UploadCloud className="h-10 w-10 text-gray-500" />
        <span className="text-gray-600 mt-2">{file ? file.name : "Click to upload a file"}</span>
        <input type="file" onChange={handleFileChange} className="hidden" />
      </label>

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`w-full mt-4 py-2 text-white rounded-lg ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {message && <p className="mt-3 text-center text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default FileUpload;
