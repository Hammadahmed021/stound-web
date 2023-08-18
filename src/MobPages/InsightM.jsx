import React from 'react';
import img1 from "../Assets/Images/img1.png";
import img2 from "../Assets/Images/img2.png";
import img3 from "../Assets/Images/img3.png";

export default function InsightM() {
 
  return (
    <>
       <section className="insightsMain">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-6 p-0">
              <div className="imgDiv">
                <img src={img1} alt="" className="img-fluid img1" />
                <img src={img2} alt="" className="img-fluid img2" />
                <img src={img3} alt="" className="img-fluid img3" />
              </div>
            </div>
            <div className="col-6 p-0">
              <div className="insightsRight">
                <div className="insightsRightWrap">
                  <h2 className="globalHeading">Neighborhood Insights</h2>
                  <p>Learn About Local Amenities and Services.</p>
                </div>
                <div className="insightsRightInner">
                  <div className="blob blob1">
                    <h2>Discover the Community</h2>
                    <p>
                      Efficiently narrow down property options using a wide
                      range of search filters such as location, price range,
                      property type, number of bedrooms, amenities, and more.
                      Empower users to find properties that perfectly match
                      their preferences.
                    </p>
                  </div>

                  <div className="blob blob2">
                    <h2>Explore the Surrounding Neighborhood </h2>
                    <p>
                      Create user accounts to enable personalized experiences.
                      Users can save their search preferences, favorite
                      properties, and receive alerts when new properties
                      matching their criteria become available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
