import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { auth, logout } from "../Components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Modal from "react-modal";
import logo from "../Assets/Images/logo.png";
import blueLogo from "../Assets/Images/logoBlue.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 500,
    height: 250,
    boxShadow: "0px 0px 50px #00000033",
    outline: "none",
    border: "none",
    borderRadius: 20,
  },
};

export default function Header() {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const LogOutMain = (e) => {
    e.preventDefault();

    logout();
    setTimeout(() => {
      setModalOpen(false);
      navigate("/login");
    }, 500);
  };
useEffect(() => {
  
}, [user])
  return (
    <>
      <header>
        <section>
          <div className="container top-header">
            <div className=" row top-row">
              <div className="col-6">
                <p className="logo">
                  <Link to="/">
                    {pathname === "/" ? (
                      <img src={logo} />
                    ) : (
                      <img src={blueLogo} />
                    )}
                  </Link>
                </p>
              </div>
              <div className="col-6">
                <ul className="ul-links">
                  <li>
                    {!user ? (
                      <Link
                        className={` ${
                          pathname === "/" ? "login-cta" : "nh-login-cta"
                        }`}
                        to="/login"
                      >
                        Log In
                      </Link>
                    ) : (
                      <p
                        onClick={setModalOpen}
                        className={` ${
                          pathname === "/" ? "login-cta" : "nh-login-cta"
                        }`}
                      >
                        Log Out
                      </p>
                    )}
                  </li>
                  {/* <li>
                    <div
                    id="toggle"
                    onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
                  >
                    <div className="toggle-inner" />
                    </div>
                    
                  </li> */}
                </ul>
              </div>
              <div className="Modal">
                <Modal
                  isOpen={modalOpen}
                  onRequestClose={() => setModalOpen(false)}
                  style={customStyles}
                >
                  <div className="modalDiv">
                    <h2>Log Out</h2>
                    <p>Are you sure, you want to log out ?</p>
                    <div className="d-flex align-items-center justify-content-around">
                      <button
                        className="cancel"
                        onClick={() => setModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button className="logoutBtn" onClick={LogOutMain}>
                        Log Out
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
