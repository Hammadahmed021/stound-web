import React from "react";
import WhiteLogo from "../Assets/Images/WhiteLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container-fluid ml-2 mr-2">
          <div className="row pt-5 pb-5 border-bottom border-light align-items-start justify-content-between border-bottom border-light">
            <div className="col-md-4 col-sm-12 pr-5 firstrow-foot same-border">
              <Link to="/">
                <img src={WhiteLogo} alt="" className="img-fluid pb-4" />
              </Link>
              <p>
                Stound mobile app offers a user-friendly interface that allows
                you to search for properties based on your criteria, such as
                location, price, and number of bedrooms.
              </p>
            </div>
            <div className="col-md-2 col-sm-12 pl-0 pt-5 same-border">
              <h2 className="footerHeadings">Product</h2>
              <ul className="footerlinks">
                <li>
                  <Link to="/terms-condition"> Terms </Link>
                </li>
                <li>
                  <Link to="/privacy-policy"> Privacy</Link>
                </li>
                <li>
                  <Link to="/deletion-policy"> delete policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-12 pl-4 pr-0 pt-5 same-border">
              <h2 className="footerHeadings">Support</h2>
              <ul className="footerlinks">
                <li>Help Center</li>
                <li>Account Info</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 pt-5 pl-5  same-border">
              <h2 className="footerHeadings">Subscribe to Our Newsletter</h2>
              <p>Join to receive new updates and resources from Stound.</p>
              <div className="form">
                <form>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>

          <div className="row pb-4 pt-4 align-items-center justify-content-center copyright">
            <ul>
              <li>
                <Link to="/privacy-policy"> Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-condition"> Terms & Condition</Link>
              </li>

              <li> © 2023 Stound. All rights reserved.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
