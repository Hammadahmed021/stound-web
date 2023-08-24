import React from "react";
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
                  <p>Discover the Services and Amenities Offered Nearby.</p>
                </div>
                <div className="insightsRightInner">
                  <div className="blob blob1">
                    <h2>Learn About the Community</h2>
                    <p>
                      Learn about the locality and community lifestyle before
                      buying/renting a property at your desired location. At
                      Stound, we help you find not just a house but a place
                      where your lifestyle thrives.
                    </p>
                  </div>

                  <div className="blob blob2">
                    <h2>Explore the Area Around You </h2>
                    <p>
                      Discover nearby properties and other essential amenities
                      via advanced search functionality. Our detailed insights
                      help you evaluate the convenience of the location,
                      ensuring a seamless transition to your new home.
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
