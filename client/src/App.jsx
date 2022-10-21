import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Signin from "./components/signin/Signin";
import { getSignedInUser, signOut } from "./components/signin/signin.service";
import Questions from "./components/questions/Questions"
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UploadCsv from "./csv/UploadCsv";


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/questionaire" element={<Questions />} />
          <Route path="/uploadcsv" element={<UploadCsv />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
