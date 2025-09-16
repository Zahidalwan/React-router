import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  userName: z
    .string()
    .min(1, "Username is required")
    .min(5, "userName must be at least 5 characters"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(5, "Password must be at least 6 characters"),
});

function Login() {
  // Ambil data tersimpan di localStorage
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  const onSubmit = (e) => {
    if (data.username !== savedUser || data.password !== savedPass) {
      setError("username", {
        type: "manual",
        message: "Username atau password salah!",
      });
      return;
    }

    console.log("Login berhasil ✅", data);
    navigate("/dashboard");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
      <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-900 p-5">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Login
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Username */}
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  {...register("username")}
                  className="w-full p-4 rounded-lg border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Masukkan Username"
                />
                {errors.userName && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.userName.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col items-center">
                <input
                  type="password"
                  {...register("password")}
                  className="w-full p-4 rounded-lg border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Masukkan Password"
                />
              </div>

              {/* Tombol login */}
              <button
                type="submit"
                className="w-full bg-indigo-900 hover:bg-black text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
                onClick={"/dashboard"}
              >
                Login
              </button>
            </form>

            {/* Tambahan: tombol menuju register */}
            <p className="text-sm text-gray-600 text-center mt-4">
              Belum punya akun?{" "}
              <button
                onClick={() => navigate("/")}
                className="text-blue-600 hover:underline font-medium"
              >
                Daftar disini
              </button>
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export default Login;
