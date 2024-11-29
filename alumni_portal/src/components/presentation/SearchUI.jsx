import React from "react";

function SearchUI({ searchData, handleChange, handleSubmit,message }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200 px-4">
      <div className="bg-blue-50 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
          Search Alumni
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={searchData.firstName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={searchData.lastName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={searchData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Passing Year */}
          <div>
            <label htmlFor="passingYear" className="block text-sm font-medium text-gray-600">
              Passing Year
            </label>
            <input
              type="number"
              name="passingYear"
              id="passingYear"
              placeholder="Enter passing year"
              value={searchData.passingYear}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {message && (
          <p className={`mt-4 text-center ${message.includes("Successful") ? "text-green-500" : "text-red-500"} text-sm sm:text-base`}>
            {message}
          </p>
        )}
        
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => window.location.href = "/register"} // Navigate to register
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-200"
          >
            Register here.
          </button>
        </p>
        </form>
        
      </div>
    </div>

  );
}

export default SearchUI;
