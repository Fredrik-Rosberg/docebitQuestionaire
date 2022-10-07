import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  
  const getAll = async () => {
    const request = await fetch("/api/users");
    const response = await request.json();

    console.log(response);
    setUsers(response)
  };
  
  useEffect(() => {
    
    getAll()
   
    
  },[]);
   console.log(users);

  return (
    <div>

      {users.map((user) => (
        <h1 key={user.id+Math.random}>{user.email}</h1>
      ))}
    </div>
  );
}

export default App
