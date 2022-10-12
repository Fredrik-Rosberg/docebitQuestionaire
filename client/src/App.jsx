import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'
import Signin from './components/signin/Signin';

function App() {
  const [users, setUsers] = useState([]);
  
  const getAll = async () => {
    const request = await fetch("/api/users");
    const response = await request.json();
    
    console.log(response);
    setUsers(response)
     const loggedIn = await fetch("/api/signin");
     const response2 = await loggedIn.json();
     console.log("XXXXXXXXXXXXXXXXXXXXXXXX");
     console.log(response2);
     console.log("YYYYYYYYYYYYYYYYYYYYYYYY")
  };
 
  useEffect(() => {
    
    getAll()
   
    
  },[]);
   console.log(users);

  return (
    <>
      <div>
        {users.map((user) => (
          <h1 key={user.id + Math.random}>{user.email}</h1>
        ))}
      </div>
      
        <Signin />
      
    </>
  );
}

export default App
