import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../Components/firebase";

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
      <Header />
      <div className="reset">
        <div className="reset__container">
          <input
            type="text"
            className="reset__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button
            className="reset__btn"
            onClick={() => sendPasswordReset(email)}
          >
            Send password reset email
          </button>
          <div>
            Want to log In? <Link to="/login">Log In</Link> now.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Reset;
