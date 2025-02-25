import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "./config";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api`) 
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-600">Medical Assistant App</h1>
      <p className="text-lg mt-4">Backend says: {message}</p>
    </div>
  );
}

export default App;
