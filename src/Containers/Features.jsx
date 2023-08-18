import React, { useLayoutEffect,useEffect, useRef } from "react";
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
      tl.to(".featureImg", {yPercent: 1, duration: 0.5, opacity: 1});
      tl.to(".card1", { duration: 0.8, opacity: 1 , delay: 100});
      tl.to(".card5", { duration: 0.8, opacity: 1 , delay: 125});
      tl.to(".card2", { duration: 0.8, opacity: 1 , delay: 150});
      tl.to(".card6", { duration: 0.8, opacity: 1 , delay: 200});
      tl.to(".card3", { duration: 0.8, opacity: 1 , delay: 250});
      tl.to(".card7", { duration: 0.8, opacity: 1 , delay: 300});
      tl.to(".card4", { duration: 0.8, opacity: 1 , delay: 350});
      tl.to(".card8", { duration: 0.8, opacity: 1 , delay: 400});
    

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
              <div
                className="customCard card1"
                
              >
                <h2>1. Agent/Broker Profiles</h2>
                <p>
                  Highlight the profiles of real estate agents or brokers
                  associated with the platform. Include information about their
                  experience, achievements, and reviews to establish trust and
                  credibility.
                </p>
              </div>

              <div
                className="customCard card2"
            
              >
                <h2>2. Neighborhood Information</h2>
                <p>
                  Offer detailed information about the neighborhoods where the
                  properties are located. Include data on nearby schools,
                  hospitals, public transport, and other amenities to help users
                  assess the suitability of the location.
                </p>
              </div>

              <div
                className="customCard card3"
             
              >
                <h2>3. User Reviews and Ratings</h2>
                <p>
                  Enable users to leave reviews and ratings for properties they
                  have visited. Positive feedback will build confidence in
                  prospective buyers or tenants, while constructive criticism
                  can help improve property listings.
                </p>
              </div>

              <div
                className="customCard card4"
              
              >
                <h2>4. Mobile App Compatibility</h2>
                <p>
                  Develop a mobile app version to extend the convenience of
                  property searching to users on the go. The app should have
                  seamless synchronization with the web app for a unified user
                  experience.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 ">
              <img
                src={featureImg}
                alt=""
                className="img-fluid featureImg"
             
              />
            </div>
            <div className="col-md-4 col-sm-12 pt-5">
              <div
                className="customCard card5"
              
              >
                <h2>5. Advanced Search Filters</h2>
                <p>
                  Efficiently narrow down property options using a wide range of
                  search filters such as location, price range, property type,
                  number of bedrooms, amenities, and more. Empower users to find
                  properties that perfectly match their preferences.
                </p>
              </div>
              <div
                className="customCard card6"
               
              >
                <h2>6. Personalized User Profiles</h2>
                <p>
                  Create user accounts to enable personalized experiences. Users
                  can save their search preferences, favorite properties, and
                  receive alerts when new properties matching their criteria
                  become available.
                </p>
              </div>
              <div
                className="customCard card7"
         
              >
                <h2>7. Real-time Notifications</h2>
                <p>
                  Keep users informed with instant notifications about new
                  property listings, price drops, and status updates for their
                  saved searches. This feature ensures that users never miss out
                  on potential opportunities.
                </p>
              </div>
              <div
                className="customCard card8"
            
              >
                <h2>8. Mortgage Calculator</h2>
                <p>
                  Keep users informed with instant notifications about new
                  property listings, price drops, and status updates for their
                  saved searches. This feature ensures that users never miss out
                  on potential opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
