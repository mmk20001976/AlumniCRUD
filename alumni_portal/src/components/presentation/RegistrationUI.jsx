import React from 'react'

function RegistrationUI({ formData, handleChange, handleSubmit }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200 p-4">
      <div className="bg-blue-50 p-8 rounded-lg mt-14 mb-14 shadow-md w-full max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
          Alumni Registration
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
              required
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
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNo" className="block text-sm font-medium text-gray-600">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNo"
              id="contactNo"
              placeholder="Enter your contact number"
              value={formData.contactNo}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              pattern="\d{1,10}"
              title="Contact No. must not exceed 10 digits"
              required
            />
          </div>

          {/* Degree */}
          <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-600">
              Degree
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Enter your degree"
              value={formData.degree}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Passing Year */}
          <div>
            <label htmlFor="passingYear" className="block text-sm font-medium text-gray-600">
              Passing Year
            </label>
            <input
              type="text"
              name="passingYear"
              id="passingYear"
              placeholder="Enter your passing year"
              value={formData.passingYear}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Joining Year */}
          <div>
            <label htmlFor="joiningYear" className="block text-sm font-medium text-gray-600">
              Joining Year
            </label>
            <input
              type="text"
              name="joiningYear"
              id="joiningYear"
              placeholder="Enter your joining year"
              value={formData.joiningYear}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* College Name */}
          <div>
            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-600">
              College Name
            </label>
            <input
              type="text"
              name="collegeName"
              id="collegeName"
              placeholder="Enter your college name"
              value={formData.collegeName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organizationName" className="block text-sm font-medium text-gray-600">
              Organization
            </label>
            <select
              name="organizationName"
              id="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Organization</option>
              <option value="Google">Google</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Amazon">Amazon</option>
              <option value="Apple">Apple</option>
              <option value="Qualcomm">Qualcomm</option>
              <option value="Morgan Stanlay">Morgan Stanlay</option>
              <option value="Axtria">Axtria</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Work Status */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Work Status</label>
            <div className="mt-1 flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="workStatus"
                  value="working"
                  checked={formData.workStatus === "working"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Working
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="workStatus"
                  value="worked"
                  checked={formData.workStatus === "worked"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Worked
              </label>
            </div>
          </div>

          {/* Joining Date */}
          <div>
            <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-600">
              Joining Date
            </label>
            <input
              type="date"
              name="joiningDate"
              id="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Leaving Date */}
          <div>
            <label htmlFor="leavingDate" className="block text-sm font-medium text-gray-600">
              Leaving Date
            </label>
            <input
              type="date"
              name="leavingDate"
              id="leavingDate"
              value={formData.leavingDate}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              disabled={formData.workStatus === "working"}
              required={formData.workStatus === "worked"}
            />
          </div>
          {/* Position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-600">
              Position
            </label>
            <select
              name="position"
              id="position"
              value={formData.position}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Position</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Manager">Manager</option>
              <option value="Intern">Intern</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1  md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationUI;