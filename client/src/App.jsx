import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'
import Signin from './components/signin/Signin';

function App() {
  // const getSignedInUser = async () => {
  //   const loggedIn = await fetch("/api/signin");
  //   const response2 = await loggedIn.json();
  //   console.log("LLLLLLLLLLLLLLLLLLLLLLLL");
  //   console.log(response2);
  //   console.log("KKKKKKKKKKKKKKKKKKKKKKK");
  // };
  return(
      <>
        <Signin />
      
    </>
  );
}

export default App
