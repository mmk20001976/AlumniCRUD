import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 text-center">Alumni Portal</h1>   
      <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <Link
          to="/search"
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
        >
          Search Alumni
        </Link>
      </div>   
      <h5 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mt-10 text-center"> Welcome to the Alumni Portal! </h5>
      <p className="text-lg sm:text-xl text-center text-gray-600 mt-4"> Stay connected, & explore opportunities..... </p>
      
    </div>
  );
}

export default Home;
