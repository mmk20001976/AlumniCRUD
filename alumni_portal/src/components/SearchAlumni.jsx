import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchAlumni } from "../Utils/api.js";
import SearchUI from "./presentation/SearchUI.jsx";

function SearchAlumni() {
  
  const [message, setMessage] = useState("");
  const [searchData, setSearchData] = useState({
    passingYear: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await searchAlumni(searchData);
      navigate("/login", { state: { email: searchData.email } });
    } catch (err) {
      if (err.response.status === 404) {
        setMessage("Alumni does not exist.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <SearchUI 
    searchData={searchData} 
    handleChange={handleChange} 
    handleSubmit={handleSubmit}
    message={message} />
  );
}

export default SearchAlumni;
