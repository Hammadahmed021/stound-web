import React, { useLayoutEffect } from "react";

import screenImg from "../Assets/Images/iPhone_12_Mockup.png";

export default function BigDiffM() {
  return (
    <>
      <div class="trigger">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <h2 className="globalHeading bigDiffHeading mb-3">
                The Big Difference
              </h2>

              <div className="col-md-6 col-sm-12">
                <div className="customCard card-1">
                <p>
                  <span>•</span>	An all-in-one platform for property buying/selling
                  </p>
                </div>

                <div className="customCard card-2">
                <p>
                  <span>•</span> Built-in chat feature to connect with sellers or agents 
                  </p>
                </div>
                <div className="customCard card-3">
                <p>
               <span>•</span>	Intuitively designed interface for a seamless experience
               </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 ">
               
                <div className="customCard card-4">
                <p>
                  <span>•</span> Schedule viewings, negotiate offers, and ask questions in-app
                  </p>
                </div>

                <div className="customCard card-5">
                <p>
                <span>•</span>	Use in-app coins to access buyer information
                </p>
                </div>

                <div className="customCard card-6">
                <p>
                  <span>•</span>	Amplify property exploration and interactions for successful deals
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 pt-2">
            <img src={screenImg} className="bigDiffImg" width="600px" />
          </div>
        </div>
      </div>
    </>
  );
}
