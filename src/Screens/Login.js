import React, { useEffect, useLayoutEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../Containers";
import axios from "axios";

import loginImg from "../Assets/Images/loginImg.png";
import logo from "../Assets/Images/logoBlue.png";
import Spinner from "../Components/Spinner";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [user, loading, error] = useAuthState(auth);
  const [errorM, setErrorM] = useState("");
  const [userData, setUserData] = useState(null);
  const [icon, setIcon] = useState("visibility_Off");

  const settingData = async (serverResponse) => {
    localStorage.setItem("user", JSON.stringify(serverResponse.data.user));
    localStorage.setItem("token", serverResponse.data.token);
    //  setUserData(serverResponse.data.user)
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon("visibility");
      setType("text");
    } else {
      setIcon("visibility_Off");
      setType("password");
    }
  };

  const onLogin = async (e) => {
    try {
      e.preventDefault();
      let firebaseResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await firebaseResponse.user.getIdToken();
      const serverResponse = await axios.post(
        "https://virtualrealitycreators.com/stound/api/auth/login",
        { token: token }
      );
      await settingData(serverResponse);
      console.log("fire", firebaseResponse);
      console.log("ser", serverResponse);
      navigate("/profile");
      setTimeout(() => {}, 1000);
    } catch (error) {
      // console.log("err", error.code)
      let errMessage = error.code;

      let output = errMessage.split("/");
      let finaErr = output[1];
      let result = finaErr.split("-");

      setErrorM(result);
      console.log("err", errMessage);
    }
  };

  // const y = async ()=>  await JSON.parse(localStorage.getItem("user"))

  // const checkLogin = ()=>{

  //   if (user){
  //     navigate("/profile")
  //    console.log("sjdbjksbdjksbdjk")
  //    } else {
  //     navigate("/login")
  //    }
  // }
 
  const getData = async () => {
    let userlocal = await JSON.parse(localStorage.getItem("user"));
    console.log("dd", userlocal);
    if (userlocal == undefined || userlocal == null) {
      return false;
    } else {
      setUserData(userlocal);
      return true;
    }
    console.log("profile", userlocal);
  };

  // useLayoutEffect(checkLogin,[])

  useEffect(() => {
    getData().then((response) => {
      console.log(response);
      if (response == true) {
        navigate("/");
      }
    });

    // return () => {
    // };
  }, []);

  // useEffect(() => {

  //   if (loading) {
  //     setTimeout(() => {
  //       <Spinner />

  //     }, 1000);
  //     return;
  //   }

  // }, [user, loading]);

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
                <Link to="/">
                  <h4>
                    <span class="material-symbols-outlined">arrow_back</span> Go
                    back
                  </h4>
                </Link>
              </div>
              <div className="loginHeading">
                <h2 className="globalHeading">Log in</h2>
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
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
                <span className="passWrap inputWrap">
                  <span class="material-symbols-outlined">lock</span>
                  <input
                    id="password"
                    name="password"
                    type={type}
                    required={true}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    class="flex justify-around items-center hanlePassword"
                    onClick={handleToggle}
                  >
                    <span class="material-symbols-outlined">{icon}</span>
                  </span>
                </span>
              </div>
              <div className="miscWrap">
                <span>
                  <input type="checkbox" />
                  <p>Remember me</p>
                </span>
                <span>
                  <p>
                    <Link to="/reset">Forgot Password?</Link>
                  </p>
                </span>
              </div>
              <p className="error"> {errorM} </p>
              <div className="submitWrap">
                <Link to="">
                  <button className="loginBtn" onClick={onLogin}>
                    log In
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
