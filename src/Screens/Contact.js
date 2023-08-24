import React, { useState } from "react";
import { Header, Footer } from "../Containers";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fName, setFname] = useState("");

  const [errorM, setErrorM] = useState("");

  return (
    <>
      <Header />
      <section className="termsSection">
        <div className="container">
          <div className="row pt-2 pb-5">
            <div className="col-md-6 col-sm-12">
              <h2 className="termsHeading">Contact Us</h2>
              <div className="inner-col">
                <div className="contactdetail">
                  <h5>Phone Number</h5>
                  <div className="top">
                    <span class="material-symbols-outlined">phone</span>

                    <p>+93437783785</p>
                  </div>
                </div>
                <div className="contactdetail">
                  <h5>Email Address</h5>
                  <div className="top">
                    <span class="material-symbols-outlined">mail</span>

                    <p><a href="mailto:jinnamorato44@gmail.com">jinnamorato44@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 pt-5">
              <div className="contactFormWrap">
                <div className="contactForm">
                  <span className="fnameWrap inputWrap">
                    <span class="material-symbols-outlined">person</span>
                    <input
                      placeholder="John wick"
                      id="full-name"
                      name="fname"
                      type="fname"
                      required={true}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </span>
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
                  <span className="textWrap inputWrap">
                    <span class="material-symbols-outlined">edit_note</span>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </span>
                </div>

                <p className="error"> {errorM} </p>
                <div className="submitWrap">
                  <Link to="">
                    <button className="loginBtn" onClick={() => {}}>
                      Submit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
