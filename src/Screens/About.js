import React from "react";
import { Header, Footer } from "../Containers";

export default function About() {
  return (
    <>
      <Header />
      <section className="termsSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="termsHeading">About Stound</h2>
              <div className="inner-col">
                <p>
                  Stound is an all-in-one property search and buying/selling app
                  designed to simplify the journey of finding and acquiring your
                  new home. The app is a comprehensive platform that seamlessly
                  integrates every step of the buying process and offers
                  innovative features for a stress-free experience.{" "}
                </p>
                <p>
                  The platform combines property search and transactions, making
                  the experience more swift and secure. Whether browsing
                  listings or connecting with sellers and agents through our
                  built-in chat feature, everything you need is at your
                  fingertips within the app. Engage directly with sellers and
                  agents to arrange property viewings, negotiate terms, and get
                  the necessary information. With Stound, communication has
                  never been more accessible.
                </p>
                <p>
                  Stound lets users stay up-to-date with the latest
                  opportunities through real-time alerts. The platform enables
                  you to explore updated rental listings and seize promising
                  prospects before they're gone. Customized filters ensure your
                  search is tailored to your preferences, while instant
                  notifications keep you informed about new listings and price
                  changes.
                </p>
                <p>
                  However, what truly sets Stound apart is the Neighborhood
                  Insights. Beyond the property listings, the app provides an
                  inclusive understanding of the surrounding area. Learn about
                  the locality and nearby amenities via Stound’s advanced search
                  feature to help you envision the community you'll be a part
                  of.
                </p>
                <p>
                  Besides, the advanced search filter also amplifies your
                  property search by creating a personalized user profile. Users
                  can save their search preferences and properties and receive
                  alerts when new listings matching their standards become
                  available. Avail these perks, and let Stound help you find
                  your dream home!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
