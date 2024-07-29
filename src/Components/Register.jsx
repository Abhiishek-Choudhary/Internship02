import React, { useState } from "react";
import { saveData } from "../services/api";

function Register({ setRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setRegister(true);
  };

  const handleRegister = async(e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all the feilds");
      return;
    }
  
    try{
       
      const response = await saveData({username,password});
     
      if(response && response.status === 200){
        setRegister(true);
      }
      else{
        alert("failed to register please try again");
      }
    }

    catch(error){
      console.log(error);
    }

  };

  return (
    <div className="flex flex-col   m-auto mt-40  w-[30%] h-80 ">
      <input
        className="border p-2 mt-16"
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="border p-2 mt-2"
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 mt-2"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
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
