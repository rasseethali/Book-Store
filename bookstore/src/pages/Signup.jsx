import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/signup",
        form
      );

      alert(res.data.message || "Signup successful ✅");
      navigate("/login");
    } catch (err) {
      alert(err?.response?.data?.message || "Signup failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl 
                      animate-fade-in-up">

        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join our bookstore community 📚
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Username */}
          <div className="relative">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-green-500
                         transition-all"
            />
            <label
              className="absolute left-4 top-3 text-gray-400 text-sm 
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                         peer-focus:-top-2 peer-focus:text-sm peer-focus:text-green-600
                         bg-white px-1 transition-all">
              Username
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-green-500
                         transition-all"
            />
            <label
              className="absolute left-4 top-3 text-gray-400 text-sm 
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                         peer-focus:-top-2 peer-focus:text-sm peer-focus:text-green-600
                         bg-white px-1 transition-all">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-green-500
                         transition-all"
            />
            <label
              className="absolute left-4 top-3 text-gray-400 text-sm 
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                         peer-focus:-top-2 peer-focus:text-sm peer-focus:text-green-600
                         bg-white px-1 transition-all">
              Password
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold
                       hover:bg-green-700 hover:scale-[1.02]
                       active:scale-95 transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Signup"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
