import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config"; // ← same as Signup

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/api/login`, form);

      // Save JWT and user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message || "Login successful ✅");
      navigate("/"); // redirect to homepage
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-2">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full border px-4 py-3 rounded-lg"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="w-full border px-4 py-3 rounded-lg"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
