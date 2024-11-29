function LoginUI({ email, setEmail,password, setPassword, handleLogin, message }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 px-4">
        <div className="bg-blue-50 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-gray-800">Login</h2>
          <form>
            <p className="text-center text-gray-600 text-base sm:text-lg mb-4">
              Access your account and reconnect with the alumni network.
            </p>
            <p className="text-center text-gray-600 text-sm sm:text-md mb-6">
              Log in to access your personalized dashboard.
            </p>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder={email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-center ${message.includes("Successful") ? "text-green-500" : "text-red-500"} text-sm sm:text-base`}>
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }
  
  export default LoginUI;
  