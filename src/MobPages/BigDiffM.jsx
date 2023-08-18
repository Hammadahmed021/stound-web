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
                  <h2>1. Offline Access and Data Saving</h2>
                  <p>
                    Provide offline access to saved property data and the
                    ability to save searches and favorites even when users are
                    not connected to the internet.
                  </p>
                </div>

                <div className="customCard card-2">
                  <h2>2. Sustainability and Green Properties</h2>
                  <p>
                    Highlight eco-friendly and sustainable properties, appealing
                    to environmentally conscious buyers and tenants referrals,
                    and more.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 ">
                <div className="customCard card-3">
                  <h2>3. Transparent Reviews and Ratings</h2>
                  <p>
                    Encourage genuine user reviews and ratings for properties
                    and agents. Ensure transparency and authenticity to build
                    trust among users.
                  </p>
                </div>
                <div className="customCard card-4">
                  <h2>4. Comprehensive Property Information</h2>
                  <p>
                    Ensure that your app offers the most detailed and accurate
                    property information. Include additional insights, and
                    neighborhood data, to give users a complete picture.
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
