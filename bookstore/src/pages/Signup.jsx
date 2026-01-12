// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../config";



// // Change this to your deployed backend URL
// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(`${API_URL}/api/signup`, form);

//       // Save JWT and user
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       alert(res.data.message || "Signup successful ✅");
//       navigate("/");
//     } catch (err) {
//       console.log(err.response?.data);
//       alert(err.response?.data?.message || "Signup failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200">
//       <div className="w-full max-w-md bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
//         <h2 className="text-3xl font-extrabold text-center text-green-700 mb-2">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Join our bookstore community 📚
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             name="username"
//             value={form.username}
//             onChange={handleChange}
//             required
//             placeholder="Username"
//             className="w-full border px-4 py-3 rounded-lg"
//           />
//           <input
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             placeholder="Email"
//             className="w-full border px-4 py-3 rounded-lg"
//           />
//           <input
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             placeholder="Password"
//             className="w-full border px-4 py-3 rounded-lg"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
//           >
//             {loading ? "Creating account..." : "Signup"}
//           </button>
//         </form>

//         <p className="text-sm text-center mt-6">
//           Already have an account?{" "}
//           <Link to="/login" className="text-green-600 font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;