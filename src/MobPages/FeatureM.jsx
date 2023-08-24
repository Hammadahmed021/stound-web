import React, { useLayoutEffect,useEffect, useRef } from "react";


import featureImg from "../Assets/Images/features.png";


export default function FeatureM() {
 
  return (
    <>
  <section className=" featuresSection">
        <div className="container">
          <div className="d-flex row featureInner">
          <div className="col-md-4 col-sm-12 leftCol pt-3">
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
            <div className="col-md-4 col-sm-12 ">
              <img
                src={featureImg}
                alt=""
                className="img-fluid featureImg"
             
              />
            </div>
            <div className="col-md-4 col-sm-12">
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
