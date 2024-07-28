import React, { useState } from "react";
import Register from "./Register";

function Login({ setLogin }) {
  const [register, setRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setRegister(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both fields.");
    } else {
      setError("");
      setLogin(false);
    }
  };

  return (
    <>
      {register ? (
        <div className="flex flex-col   m-auto mt-40  w-[30%] h-80 ">
          <input
            className="border p-2 mt-16"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border p-2 mt-2"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className='text-red-600 mt-2'>{error}</div>}
          <button
            className="bg-blue-600 p-2 rounded-lg shadow-md mt-4 text-white"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="mt-2">
            Don't have an account?
            <a
              href="/"
              className="text-blue-600 cursor-pointer ml-2"
              onClick={handleClick}
            >
              Register
            </a>
          </div>
        </div>
      ) : (
        <Register setRegister={setRegister} />
      )}
    </>
  );
}

export default Login;
