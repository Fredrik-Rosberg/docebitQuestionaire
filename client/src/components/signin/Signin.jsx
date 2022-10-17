import React from "react";
import { signIn } from "./signin.service";
import { useState, useEffect } from "react";
import { validateUserInputs } from "./validation.service";
import "./signin.css";

function Signin() {
  const initValue = "Default";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(initValue);
  const [errorEmail, setErrorEmail] = useState(initValue);
  const [showMessages, setShowMessages] = useState(false);

  //OnSubmit kollas så att det inte är några felmeddelanden pga användarens felaktiga inputs. Kör endast signIn om det är ifyllt rätt enligt kravspecen.
  useEffect(() => {
    const { emailError, passwordError } = validateUserInputs(email, password);
    setErrorPassword(passwordError);
    setErrorEmail(emailError);
    setShowMessages(false);
  }, [email, password]);lkj

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errorEmail == "" && errorPassword == "") {
      const user = { email: email, password: password };
      let response = await signIn(user);
      if(response && response=="No matching user"){
        setErrorEmail(response)
      }
      else{
        setErrorPassword(response)

      }
      
      
      
    }
    setShowMessages(true);
  };

  return (
    <>
      <img
        className="background"
        src="../../src/assets/cropped-DocebIT01-1-1.jpg"
      />
      <form onSubmit={handleSubmit} className="signin">
        <h2 id="login-header">Docebit selftest login</h2>

        <div className="email-label">
          <div>
            <label htmlFor="email">Username: </label>
          </div>
          <div>
            <input
              className="login-input"
              onChange={(e) => {
                setEmail(e.target.value), setErrorEmail(initValue);
              }}
              value={email}
              placeholder="enter@email.com"
              type="text"
            />
          </div>
          {showMessages ? (
            errorEmail == initValue ? (
              ""
            ) : (
              <div className="error">{errorEmail}</div>
            )
          ) : (
            ""
          )}
        </div>

        <div className="password-label">
          <div className="label-style">
            <label htmlFor="email">Password: </label>
          </div>
          <input
            className="login-input"
            onChange={(e) => {
              setPassword(e.target.value), setErrorPassword(initValue);
            }}
            value={password}
            placeholder="enter@password.com"
            type="password"
          />
          {showMessages ? (
            errorPassword == initValue ? (
              ""
            ) : (
              <div className="error">{errorPassword}</div>
            )
          ) : (
            ""
          )}
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

//Bör felhanteras:

// 1. - Sänder en postrequest om inga fält är ifyllda och man trycker på submit
//    EVENTUELLT FIXAT - lade till email && password i if-satsen om där inte finns error-meddelanden

// 2. - Om felmeddelande visas och man fyller i nya uppgifter och trycker på submit,
//      så tas först meddelandena bort och man blir tvungen att trycka på submit ännu en gång.

// 3. - Om användaren inte finns, ska ett felmeddelande visas.. ex. har du fyllt i rätt uppgifter?

// 4. - Ska programmet ge felmeddelande på engelska eller svenska?
