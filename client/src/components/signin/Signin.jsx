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
    <>
      
      <img className="background" src="../../src/assets/cropped-DocebIT01-1-1.jpg"/>
      <form onSubmit={handleValidation} className="signin">
        <h2 id="login-header">Docebit selftest login</h2>

        <div className="email-label">
          <div>
            <label htmlFor="email">Username: </label>
          </div>
          <div>
            <input
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="enter@email.com"
              type="text"
            />
          </div>
          <div className="error">{errorEmail}</div>
        </div>

        <div className="password-label">
          <div className="label-style">
            <label htmlFor="email">Password: </label>
          </div>
          <input
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter@password.com"
            type="password"
          />
          <div className="error">{errorPassword}</div>
        </div>
        <div className="button-css">
          <button id="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Signin;
