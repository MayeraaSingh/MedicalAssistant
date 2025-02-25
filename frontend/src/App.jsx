import React from "react";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Medical Assistant</h1>
      <FileUpload />
    </div>
  );
}

export default App;
