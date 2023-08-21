import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../Components/firebase";
import loginImg from "../Assets/Images/loginImg.png";
import logo from "../Assets/Images/logoBlue.png";
import { Footer, Header } from "../Containers";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/profile");
  }, [user, loading]);
  return (
    <>
      <section className="LoginSection">
        <div className="mycontainer">
          <div className=" col-left">
            <Link to="/">
              <img src={logo} className="img-fluid logoImg" />
            </Link>

            <div className="login-form-wrap">
              <div className="goBackdiv">
                <Link to="/login">
                  <h4>
                    <span class="material-symbols-outlined">arrow_back</span> Go
                    back
                  </h4>
                </Link>
              </div>
              <div className="loginHeading">
                <h2 className="globalHeading">Reset Password</h2>
                <p>
                  At Stound, we respect your right to control your personal
                  information.
                </p>
              </div>
              <div className="loginForm">
                <span className="emailWrap inputWrap">
                  <span class="material-symbols-outlined">mail</span>
                  <input
                    placeholder="johnwick@gmail.com"
                    id="email-address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </div>

              <div className="submitWrap">
                <Link to="">
                  <button
                    className="loginBtn"
                    onClick={() => sendPasswordReset(email)}
                  >
                    Forgot Password
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-right">
            <img src={loginImg} className="img-fluid loginImg" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Reset;
