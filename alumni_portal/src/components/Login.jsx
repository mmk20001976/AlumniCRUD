import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Utils/api.js";
import LoginUI from "./presentation/LoginUI.jsx";
import { useLocation } from "react-router-dom";


function Login() {
  const location = useLocation();
  const email2 = location.state?.email || ""; 
  const [email, setEmail] = useState(email2); 
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  
  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);//api call
      // console.log(response);
      localStorage.setItem("token", response);
      setMessage(response.data === "Invalid Credential" ? "Incorrect Password" : "Login Successful");
      navigate("/dashboard");
    } catch (err) {
      if (err.response.status === 401) {
        setMessage("Invalid email or password.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <LoginUI
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      message={message}
    />
  );
}

export default Login;