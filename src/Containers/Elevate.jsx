import React from "react";
import ElevateImg from "../Assets/Images/Elevate.png";
import Appstore from '../Assets/Images/appstore.png'
import Playstore from '../Assets/Images/playstore.png'

export default function Elevate() {
  return (
    <>
      <section className="ElevateSection" >
        <div className="container">
          <div className="row pt-3 pb-5 mb-5 align-items-center justify-content-center">
            <div className="col-md-4 col-sm-12">
              <img src={ElevateImg} alt="" className="ElevateImg" data-scroll={true}
                data-scroll-speed="-2"
                data-scroll-direction="horizontal"
                />
            </div>
            <div className="col-md-8 col-sm-12">
              <h2 className="globalHeading"  data-scroll
                data-scroll-speed="0.5"
                data-scroll-direction="vertical">
                Elevate Your Property Search with Our Mobile App!
              </h2>
              <div className="ElevateSectionInner">
                <div className="blob"  data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical">
                  <p>
                    "Download our iOS app from the App Store and enjoy a
                    seamless property search experience on your iPhone or iPad.
                    Explore listings, access 3D virtual tours, and receive
                    real-time notifications - all at your fingertips."
                  </p>
                  <img src={Appstore} className="img-fluid" />
                </div>
                <div className="blob"  data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical">
                  <p>
                    "Get the best of property hunting on Android! Download our
                    app from Google Play Store and unlock a world of properties.
                    Discover nearby amenities, compare listings, and stay
                    informed with instant alerts."
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
