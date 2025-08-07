import { loginSetup } from "../../services/loginservices";

const Login = () => {
  const login = loginSetup();

  if (!login) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 to-emerald-500">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  const { handleChange, handleSubmit } = login;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 to-emerald-500">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center">
        
        <img
          src="/src/assets/logo.png"
          alt="Company Logo"
          className="w-20 h-20 mb-4 rounded-full shadow"
        />
        <h2 className="text-3xl font-bold text-emerald-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          Sign in to your account
        </p>
        {/* Form */}
        <div className="w-full flex flex-col gap-4">
          <input
            name="userName"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />
          <input
            name="passWord"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />
          <button
            onClick={handleSubmit}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg shadow transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
