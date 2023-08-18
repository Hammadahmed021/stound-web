import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HeadingShrink() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".featuresHeading",
          start: "center center",
          end: "bottom center",
          scroller: ".main-app",
          scrub: true,
          // markers: true,
          pin: true,
        },
      });
      tl.to(".testClass", { scale: 0.5, duration: 0.5, opacity: 1 });
    

      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <>
      <div className=" featuresHeading">
        <h2 className="testClass globalHeading">Stound's Features</h2>
      </div>
    </>
  );
}
