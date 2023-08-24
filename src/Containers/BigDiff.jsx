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

        tl.to(".card-2", { yPercent: 40, duration: 0.05, opacity: 0.5 });
        tl.to(".card-2", { xPercent: 32, duration: 0.05, opacity: 1 });

        tl.to(".card-3", { yPercent: 40, duration: 0.05, opacity: 0.5 });
        tl.to(".card-3", { xPercent: 32, duration: 0.05, opacity: 1 });

        tl.to(".card-4", { yPercent: 50, duration: 0.05, opacity: 0.5 });
        tl.to(".card-4", { xPercent: 20, duration: 0.05, opacity: 1 });

        tl.to(".card-5", { yPercent: 50, duration: 0.05, opacity: 0.5 });
        tl.to(".card-5", { xPercent: 20, duration: 0.05, opacity: 1 });

        tl.to(".card-6", { yPercent: 50, duration: 0.05, opacity: 0.5 });
        tl.to(".card-6", { xPercent: 20, duration: 0.05, opacity: 1 });

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
                 
                  <p>
                  <span>•</span>	An all-in-one platform for property buying/selling
                  </p>
                </div>

                <div className="customCard card-2">
               
                  <p>
                  <span>•</span> Built-in chat feature to connect with sellers or agents 
                  </p>
                </div>
                <div className="customCard card-3">
               
               <p>
               <span>•</span>	Intuitively designed interface for a seamless experience
               </p>
             </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-5 mb-5">
              <div className="customCard card-4">
                
                  <p>
                  <span>•</span> Schedule viewings, negotiate offers, and ask questions in-app
                  </p>
                </div>
                <div className="customCard card-5">
                
                <p>
                <span>•</span>	Use in-app coins to access buyer information
                </p>
              </div>
              <div className="customCard card-6">
                
                  <p>
                  <span>•</span>	Amplify property exploration and interactions for successful deals
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
