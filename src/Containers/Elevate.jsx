import React from "react";
import ElevateImg from "../Assets/Images/Elevate.png";
import Appstore from "../Assets/Images/appstore.png";
import Playstore from "../Assets/Images/playstore.png";

export default function Elevate() {
  return (
    <>
      <section className="ElevateSection">
        <div className="container">
          <div className="row pt-3 pb-5 mb-5 align-items-center justify-content-center">
            <div className="col-md-4 col-sm-12">
              <img
                src={ElevateImg}
                alt=""
                className="ElevateImg"
                data-scroll={true}
                data-scroll-speed="-2"
                data-scroll-direction="horizontal"
              />
            </div>
            <div className="col-md-8 col-sm-12">
              <h2
                className="globalHeading"
                data-scroll
                data-scroll-speed="0.5"
                data-scroll-direction="vertical"
              >
                Optimize Your Property Search with Our Mobile App!
              </h2>
              <div className="ElevateSectionInner">
                <div
                  className="blob"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                >
                  <p>
                    Get Stound’s iOS app from the App Store to enjoy a seamless
                    property search experience on your iPhone or iPad. Browse
                    listings, access virtual tours, receive notifications, and
                    much more. Download now!
                  </p>
                  <img src={Appstore} className="img-fluid" />
                </div>
                <div
                  className="blob"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                >
                  <p>
                    Make the most of Stound’s Android app – discover nearby
                    amenities, compare listings, stay informed with prompt
                    alerts, and more. Download the app from the Google Play
                    Store right away!
                  </p>
                  <img src={Playstore} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
