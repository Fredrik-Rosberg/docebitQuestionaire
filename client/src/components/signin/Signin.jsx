
import React from "react";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getSignedInUser=async()=>{
     const loggedIn = await fetch("/api/signin");
     const response2 = await loggedIn.json();
     console.log("LLLLLLLLLLLLLLLLLLLLLLLL");
     console.log(response2);
     console.log("KKKKKKKKKKKKKKKKKKKKKKK");


  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };

    let dataResponse = await fetch("/api/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let response = await dataResponse.json();
    if (response.loggedIn) {
      console.log("You are logged in");
    } else {
      console.log("login failure");
    }
    getSignedInUser()
  };

  return (
    <form onSubmit={handleSubmit} className="signin">
      <label htmlFor="email">Enter email por favor: </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="enter@email.com"
        type="email"
        required
      />
      <label htmlFor="email">Enter password por favor: </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="enter@password.com"
        type="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Signin;
