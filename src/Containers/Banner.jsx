import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import AOS from "aos";

import bannerImg from "../Assets/Images/bg.png";
import appStoreImg from "../Assets/Images/appstore.png";
import playStoreImg from "../Assets/Images/playstore.png";

const Banner = () => {
  // useLayoutEffect(() => {
  //   let t1 = gsap.timeline();

  //   setTimeout(() => {
  //     const tl = gsap.timeline();
  //     tl.to(".animation",{
  //         fontSize: "30px",
  //         position: "absolute",
  //         height: "100px",
  //         width: "150px",
  //         duration: 3,
  //         delay: 2
  //     });
  //     tl.to(".txt",{
  //         opacity: 1,
  //         duration: 1,
  //         stagger: .25
  //     })
  //     tl.to(".ul",{
  //         opacity: 1,
  //         duration: 1,
  //         stagger: .25
  //     });
  //   }, 1000);

  //   return () => {
  //        };
  // }, [])
  // const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    // const body = document.body
    // const toggle = document.querySelector('.toggle-inner')

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    // if (darkMode === true) {
    //   body.classList.add('dark-mode')
    //   toggle.classList.add('toggle-active')
    // } else {
    //   body.classList.remove('dark-mode')
    //   toggle.classList.remove('toggle-active')
    // }
    AOS.init();
    AOS.refresh();

    return () => {};
  }, []);
  // }, [darkMode])

  return (
    <>
      <section
        className="bannerClass"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="container top-header">
          <div className=" row top-row-2">
            <div className="col-6 ">
              <img
                src={bannerImg}
                className="bannerImage img-fluid"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-delay="300"
              />
            </div>
            <div className="col-6 p-5 d-flex flex-column justify-content-center flex-wrap">
              <h1
                className="bannerMainText"
                data-aos="fade-up"
                data-aos-duration="00"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-delay="50"
              >
                Stound: Your Gateway to Exceptional Properties!
              </h1>
              <p
                className="bannerText"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-delay="100"
              >
                Search, buy, sell, or rent your perfect home with Stound. Delve
                into a curated selection of properties that match your lifestyle
                and preferences. Begin your property exploration journey today!
              </p>
              <div className="img-div d-flex align-items-center mt-5">
                <img
                  src={appStoreImg}
                  alt=""
                  className="bannerStoreImg"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-offset="0"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="150"
                />
                <img
                  src={playStoreImg}
                  alt=""
                  className="bannerStoreImg ml-3"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-offset="0"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
