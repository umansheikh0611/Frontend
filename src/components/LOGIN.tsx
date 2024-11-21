import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type LoginProps = {
  toggleForm: () => void;
};

export default function Login({ toggleForm }: LoginProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState(""); // Username field
  const [password, setPassword] = useState(""); // Password field
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://ahmed224.pythonanywhere.com/api/authenticate-doctor/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("authToken", data.access); // Save token in localStorage
        localStorage.setItem("doctor", JSON.stringify(data.doctor)); // Save user info
        window.location.href = "/dashboard"; // Redirect to dashboard
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to log in.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while trying to log in.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="h-100vh flex justify-center items-center flex-col py-20 px-5 lg:w-1/2 md:w-full">
      <div className="w-80 flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-2xl">Login to Your Account</h2>
        </div>

        <div className="flex flex-col items-start justify-center gap-5">
          {/* Username Field */}
          <div className="relative w-full">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email"
              required
              className="bg-transparent border rounded-lg w-full p-3 pl-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="relative w-full">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" />
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              required
              className="bg-transparent border rounded-lg w-full p-3 pr-10 pl-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}

        {/* Remember Me & Forgot Password */}
        <div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-start gap-3 py-5">
              <input type="checkbox" className="transform scale-150" />
              <p className="text-sm text-gray-500">Remember me</p>
            </div>
            <Link href="/forgot-password" className="text-blue-600 text-sm">
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Login Button */}
        <div className="w-full">
          <Button onClick={handleLogin} disabled={loading} className="w-full text-1xl">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>

        {/* Register Link */}
        <div>
          <p className="text-sm text-gray-500">
            {`Not registered yet?`}{" "}
            <span onClick={toggleForm} className="text-blue-600 cursor-pointer">
              Create an Account
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
