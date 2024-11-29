import React from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-200 shadow-lg rounded-lg items-center overflow-hidden">
            <h2 className="bg-blue-700 text-white py-6 px-8 text-center text-3xl font-semibold">Welcome to the Alumni Dashboard</h2>
        </div>
        <div className="text-center mt-6">
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"> Logout </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
