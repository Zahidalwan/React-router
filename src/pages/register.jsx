import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi panjang username & password
    if (userName.length < 5 || password.length < 5) {
      setError("Username dan Password minimal 5 karakter!");
      return;
    }

    // Validasi email
    if (!email.includes("@")) {
      setError("Email harus valid (mengandung @)");
      return;
    }

    // Jika semua valid → simpan ke localStorage
    localStorage.setItem("username", userName);
    localStorage.setItem("password", password);

    setError("");
    console.log("Data tersimpan:", { name, userName, email, password });

    // Arahkan ke dashboard
    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-700 p-5">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Register
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Username */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Pesan error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Tombol register */}
            <button
              type="submit"
              className="bg-indigo-900 hover:bg-black text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
