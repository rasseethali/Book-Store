import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
        "http://localhost:5000/api/users/login",
        form
      );

      alert(res.data.message);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/home");
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-green-100 via-white to-green-200
        dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
        transition-colors duration-500
      "
    >
      {/* Card */}
      <div
        className="
          w-full max-w-md
          bg-white/90 dark:bg-gray-900/90
          backdrop-blur-xl
          p-8 rounded-2xl
          shadow-2xl dark:shadow-black/40
          animate-fade-in-up
          transition-all duration-500
        "
      >
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-green-700 dark:text-green-400 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Login to continue 📚
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="
                peer w-full rounded-lg px-4 py-3
                border border-gray-300 dark:border-gray-700
                bg-transparent text-gray-900 dark:text-gray-100
                focus:outline-none focus:ring-2 focus:ring-green-500
                hover:border-green-400
                transition-all duration-300
              "
            />
            <label
              className="
                absolute left-4 top-3 text-gray-400 dark:text-gray-500 text-sm
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                peer-focus:-top-2 peer-focus:text-sm
                peer-focus:text-green-600 dark:peer-focus:text-green-400
                bg-white dark:bg-gray-900 px-1
                transition-all
              "
            >
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
              className="
                peer w-full rounded-lg px-4 py-3
                border border-gray-300 dark:border-gray-700
                bg-transparent text-gray-900 dark:text-gray-100
                focus:outline-none focus:ring-2 focus:ring-green-500
                hover:border-green-400
                transition-all duration-300
              "
            />
            <label
              className="
                absolute left-4 top-3 text-gray-400 dark:text-gray-500 text-sm
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                peer-focus:-top-2 peer-focus:text-sm
                peer-focus:text-green-600 dark:peer-focus:text-green-400
                bg-white dark:bg-gray-900 px-1
                transition-all
              "
            >
              Password
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg font-semibold
              bg-green-600 text-white
              hover:bg-green-700 hover:-translate-y-[1px] hover:shadow-xl
              active:scale-95
              transition-all duration-300 ease-out
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/"
            className="text-green-600 dark:text-green-400 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
