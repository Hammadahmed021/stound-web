import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



import screenImg from "../Assets/Images/iPhone_12_Mockup.png";

export default function BigDiff() {
  gsap.registerPlugin(ScrollTrigger);
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      setTimeout(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".trigger",
            start: "center center",
            end: "200%",
            // endTrigger: ".scrubEnd",
            // pinSpacing: false,
            scrub: true,
            scroller: ".main-app",
            // markers: true,
            pin: true,
          },
        });
        tl.to(".bigDiffHeading", { yPercent: 50, duration: 0.01, opacity: 0.5 });
        tl.to(".bigDiffHeading", { xPercent: 12, duration: 0.05, opacity: 1 });
        tl.to(".bigDiffImg", { yPercent: 10, duration: 0.05, opacity: 0.5 });
        tl.to(".bigDiffImg", { xPercent: -10, duration: 0.05, opacity: 1 });

        tl.to(".card-1", { yPercent: 40, duration: 0.05, opacity: 0.5 });
        tl.to(".card-1", { xPercent: 32, duration: 0.05, opacity: 1 });

        tl.to(".card-2", { yPercent: 60, duration: 0.05, opacity: 0.5 });
        tl.to(".card-2", { xPercent: 32, duration: 0.05, opacity: 1 });

        tl.to(".card-3", { yPercent: 40, duration: 0.05, opacity: 0.5 });
        tl.to(".card-3", { xPercent: 20, duration: 0.05, opacity: 1 });

        tl.to(".card-4", { yPercent: 50, duration: 0.05, opacity: 0.5 });
        tl.to(".card-4", { xPercent: 20, duration: 0.05, opacity: 1 });

        ScrollTrigger.refresh();
      }, 1000);
    });

    return () => ctx.revert();
  }, []);

  




  return (
    <>
      <div class="trigger">
        <div className="row">
          <div className="col-md-7 col-sm-12 p-0">
            <h2 className="globalHeading bigDiffHeading">The Big Difference</h2>

            <div className="row scrubEnd">
              <div className="col-md-6 col-sm-12 mt-5 mb-5">
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
              <div className="col-md-6 col-sm-12 mt-5 mb-5">
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
