import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAlumni } from "../Utils/api.js";
import RegistrationUI from "./presentation/RegistrationUI.jsx";


function Registration() {
  const navigate = useNavigate(); // For redirecting to the login page
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    degree: "",
    passingYear: "",
    joiningYear: "",
    collegeName: "",
    organizationName: "",
    position: "",
    address: "",
    joiningDate: "",
    leavingDate: "",
    workStatus: "working", // Default to 'working'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Joining date < Leaving date
    if (
      formData.workStatus === "worked" &&
      new Date(formData.joiningDate) >= new Date(formData.leavingDate)
    ) {
      alert("Joining Date must be earlier than Leaving Date.");
      return;
    }

    try {
      await registerAlumni(formData);
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <RegistrationUI formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
}

export default Registration;
