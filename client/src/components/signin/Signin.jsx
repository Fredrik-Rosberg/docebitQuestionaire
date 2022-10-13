import React from "react";
import { signIn } from "../../services/signin.service";
import { useState } from "react";
import { validateUserInputs } from "../../services/validation.service";
import "./signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  //OnSubmit kollas så att det inte är några felmeddelanden pga användarens felaktiga inputs. Kör endast signIn om det är ifyllt rätt enligt kravspecen.

  const handleSubmit = (e) => {
    e.preventDefault();

    const { emailError, passwordError } = validateUserInputs(email, password);
    setErrorPassword(passwordError);
    setErrorEmail(emailError);

    if (errorEmail == "" && errorPassword == "" && email && password) {
      const user = { email: email, password: password };
      signIn(user);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="signin">
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

        <button type="submit">Sign in</button>
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
