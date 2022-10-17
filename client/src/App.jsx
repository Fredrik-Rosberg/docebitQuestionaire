import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Signin from "./components/signin/Signin";
import { getSignedInUser, signOut } from "./components/signin/signin.service";

function App() {
  useEffect(() => {
    getSignedInUser();
  }, []);
  
  
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <>
      <button onClick={handleSignOut}>Sign out</button>
      <Signin /> 
    </>
  );
}

export default App;
