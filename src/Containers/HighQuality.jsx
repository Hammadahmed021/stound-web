import React from "react";
import left from "../Assets/Images/left.png";
import right from "../Assets/Images/right.png";
import hqImg from "../Assets/Images/bigImg.png";

export default function HighQuality() {
  return (
    <>
      <section className="highQuality">
        <div className=" highQuality-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 text-center">
                <img src={left} alt="" className="img-fluid" />
                <div
                  className="blob text-left pt-4"
                  data-scroll={true}
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                >
                  <h2>Countless Options to Suit Your Needs. </h2>
                  <p>
                    Discover the perfect fit for your lifestyle. Stound offers
                    multiple choices to match your budget, location, and other
                    preferences.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <img
                  src={hqImg}
                  className="hq-image"
                  data-scroll={true}
                  data-scroll-speed="1"
                  data-scroll-direction="horizontal"
                />
              </div>
              <div className="col-4 text-right">
                <div
                  className="blob text-left pb-4"
                  data-scroll={true}
                  data-scroll-speed="-1"
                  data-scroll-direction="vertical"
                >
                  <h2>From Apartments to Villas, Stound Has It All! </h2>
                  <p>
                    Experience diversity with Stound. From modern apartments to
                    spacious villas, find your dream property hassle-free!
                  </p>
                </div>
                <img src={right} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
