import CheckValidData from "../utils/validate";
import Header from "./Header";
import { useState,useRef } from "react";

function Login() {
  const [signInForm, setSignInForm] = useState(true);
  const[errorMessage,setErrorMessage]=useState("");


  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);

  function toggleSignInForm() {
    setSignInForm(!signInForm);
  }

  function handleSubmit(e) {
    e.preventDefault(); // ❗ prevent page reload
    // console.log(signInForm ? "Signing In" : "Signing Up");
  }

  function handleButtonClick() {
  let message;

  if (signInForm) {
    message = CheckValidData(
      email.current.value,
      password.current.value
    );
  } else {
    message = CheckValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    console.log(name.current.value)
  }
  console.log(email.current.value);
  console.log(password.current.value);
  console.log(message);
  setErrorMessage(message);

  // sign In / Sign Up
}

  return (
    <>
      <Header />

      <div className="bg-img">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_medium.jpg"
          alt="background"
        />

        <form className="form" onSubmit={handleSubmit}>
          <h2 className="sign">{signInForm ? "Sign In" : "Sign Up"}</h2>

          {signInForm?null: (
            <input
              ref={name}
              type="text"
              placeholder="enter name"
              className="name"
            />
          )}

          <input
            type="email"
            ref={email}
            placeholder="enter email"
            className="email"
          />

          <input
            type="password"
            ref={password}
            placeholder="enter password"
            className="password"
          />
          <p className="error">{errorMessage}</p>

          <button className="signIn" type="submit" onClick={handleButtonClick}>
            {signInForm ? "Sign In" : "Sign Up"}
          </button>

          <span className="check-rem">
            <input type="checkbox" /> Remember Me
          </span>

          <p onClick={toggleSignInForm} className="toggle-text">
            {signInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Continue"}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
