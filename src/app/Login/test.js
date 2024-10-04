"use client"; // Ensure it's a client-side component

import { FaEye } from "react-icons/fa";
import { CiMail, CiLock, CiPhone } from "react-icons/ci";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import './login.css';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct Next.js import for router
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase auth

export default function Login() {
  const [loginstate, setLoginstate] = useState(true);
  const [signupstate, setsignupstate] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New username state
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isClient, setIsClient] = useState(false); // Client-side check
  const router = useRouter();

  useEffect(() => {
    // Check if the component is running on the client-side
    setIsClient(true);
  }, []);

  // Handle Sign-Up
  const handleSignUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up: ", user);

      setSuccessMessage("Sign-up successful. Welcome " + username + "!");
      setErrorMessage("");
      // After sign-up, show the login option
      setTimeout(() => {
        setLoginstate(true);
        setsignupstate(false);
        setSuccessMessage(""); // Clear success message
      }, 2000);
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  // Handle Login
  const handleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in: ", user);

      setSuccessMessage("Login successful. Redirecting...");
      setErrorMessage("");
      setTimeout(() => {
        if (isClient) {
          router.push("/homepage"); // Redirect to homepage after successful login
        }
      }, 2000);
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  // Render UI
  return (
    <div className="register">
      {/* Sign-up and Login Forms */}
      <div className="login-signup">
        <div className={`login ${!loginstate && "hidelogin"}`}>
          <h1>LOGIN</h1>
          <div className="input">
            <CiMail />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <CiLock />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEye />
          </div>

          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <span>
            Don't have an account? <a onClick={() => setLoginstate(false)}>Sign up</a>
          </span>
        </div>

        <div className={`signup ${signupstate && "showsignup"}`}>
          <h1>CREATE AN ACCOUNT</h1>
          <div className="input">
            <CiMail />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <CiPhone />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="input">
            <CiLock />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEye />
          </div>

          <button onClick={handleSignUp} disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && (
            <div className="success-message">
              <p>{successMessage}</p>
              <button onClick={() => setLoginstate(true)}>Proceed to Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
