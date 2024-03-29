import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();


useEffect(()=>{

  const auth = localStorage.getItem('user');

  if(auth){
    navigate('/')
  }
},[])

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

    localStorage.setItem("user",JSON.stringify(result))
    //localStorage.setItem("token",JSON.stringify(result.auth))

      navigate("/");
    
  };

  return (
    <div className="register">
      <h1>Register</h1>

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
      />
      <button className="button" type="button" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
