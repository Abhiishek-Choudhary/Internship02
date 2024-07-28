import React, { useState } from "react";

function Register({ setRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDeafult();
    setRegister(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill all the fields.");
    } else {
      setError("");
      setRegister(true);
    }
  };

  return (
    <div className="flex flex-col   m-auto mt-40  w-[30%] h-80 ">
      <input
        className="border p-2 mt-16"
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 mt-2"
        type="text"
        placeholder="Enter Username"
      />
      <input
        className="border p-2 mt-2"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        {error && <div className='text-red-600 mt-2'>{error}</div>}
      <button
        onClick={handleRegister}
        className="bg-blue-600 p-2 rounded-lg shadow-md mt-4 text-white"
      >
        Register
      </button>
      <div className="mt-2">
        Already have an account?
        <a
          href="/"
          className="text-blue-600 cursor-pointer ml-2"
          onClick={handleClick}
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Register;
