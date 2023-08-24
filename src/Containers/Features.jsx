import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import featureImg from "../Assets/Images/features.png";

export default function Features() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      setTimeout(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".featuresSection",
            start: "center center",
            end: "200%",
            scroller: ".main-app",
            scrub: true,
            // markers: true,
            pin: true,
          },
        });
        tl.to(".featureImg", { yPercent: 1, duration: 0.5, opacity: 1 });
        tl.to(".card1", { duration: 0.8, opacity: 1, delay: 100 });
        tl.to(".card4", { duration: 0.8, opacity: 1, delay: 125 });
        tl.to(".card2", { duration: 0.8, opacity: 1, delay: 150 });
        tl.to(".card5", { duration: 0.8, opacity: 1, delay: 200 });
        tl.to(".card3", { duration: 0.8, opacity: 1, delay: 250 });
        tl.to(".card6", { duration: 0.8, opacity: 1, delay: 300 });

        ScrollTrigger.refresh();
      }, 1000);
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className=" featuresSection">
        <div className="container">
          <div className="d-flex row featureInner">
            <div className="col-md-4 col-sm-12 leftCol pt-5">
              <div className="customCard card1">
                <h2>1. Quality Listings</h2>
                <p>
                  Thanks to real-time inventory on Stound, you can explore
                  updated rentals firsthand and grab the finest opportunities
                  before all others.
                </p>
              </div>

              <div className="customCard card2">
                <h2>2. Realtime Alerts</h2>
                <p>
                  Stound lets you search using customized filters by price,
                  location, bedroom count, or amenity and stay informed with
                  instant notifications for new listings, price drops, etc.
                </p>
              </div>

              <div className="customCard card3">
                <h2>3. Built-in Chat Function</h2>
                <p>
                  Connect directly with sellers and agents, schedule property
                  viewings, negotiate deals, and clarify details – all
                  seamlessly within the app’s chat function.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center ">
              <img src={featureImg} alt="" className="img-fluid featureImg" />
            </div>
            <div className="col-md-4 col-sm-12 pt-5">
              <div className="customCard card4">
                <h2>4. Save Your Favorites</h2>
                <p>
                  Keep track of your preferred properties for convenient access
                  later. Easily bookmark and revisit preferred properties for
                  efficient decision-making.
                </p>
              </div>
              <div className="customCard card5">
                <h2>5. Personalized User Profiles</h2>
                <p>
                  Create user accounts to enable tailored experiences by saving
                  search preferences and properties – Stound alerts you when new
                  properties matching your criteria become available.
                </p>
              </div>
              <div className="customCard card6">
                <h2>6. Neighborhood Information</h2>
                <p>
                  Explore comprehensive neighborhood insights, including the
                  community and other nearby amenities – aiding property
                  evaluation for a well-rounded perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
