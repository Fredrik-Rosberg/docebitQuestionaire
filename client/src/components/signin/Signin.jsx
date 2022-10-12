import React from "react";
import { useState } from "react";
import { passwordValidator, emailValidator } from "./regValidator";
import "./signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  //OnSubmit kollas så att det inte är några felmeddelanden pga användarens felaktiga inputs. Kör endast signIn om det är ifyllt rätt enligt kravspecen. 

  const handleValidation = (e) => {
    e.preventDefault();
    let validationPassword = passwordValidator(password);
    setErrorPassword(validationPassword);

    let validationEmail = emailValidator(email);
    setErrorEmail(validationEmail);

    if (errorEmail == "" && errorPassword == "") {
      signIn();
    }
  };

  //signar in. Skickar en postrequest till backend. Får svar om man är inloggad eller inte.  

  const signIn = async (e) => {
    const data = { email: email, password: password };

    let dataResponse = await fetch("/api/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let response = await dataResponse.json();
    if (response.loggedIn) {
      console.log("Infon ska in i cookie");
    } else {
      console.log("login failure");
    }
  };

  return (
    <form onSubmit={handleValidation} className="signin">
      <label htmlFor="email">Enter email por favor: </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="enter@email.com"
        type="text"
      />
      <div className="error">{errorEmail}</div>
      <label htmlFor="email">Enter password por favor: </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="enter@password.com"
        type="password"
      />
      <div className="error">{errorPassword}</div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Signin;
