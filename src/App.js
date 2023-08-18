import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Loader from "./Components/Loader";
import { Home, Deletion, Privacy, Terms, Login, Profile , Reset } from "./Screens";
import { useLocation } from "react-router-dom";
import SoundBar from "./Components/SoundBar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import ScrollProxy from "./Components/ScrollProxy";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticleConfig from "./Components/ParticleConfig";
import Cursor from "./Components/Cursor";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { useLocomotiveScroll } from "react-locomotive-scroll"; 

const App = () => {
  AOS.init();
  const [loaded, setLoaded] = useState(true);
  const containerRef = useRef(null);
  const location = useLocation();
  const { pathname } = useLocation();
  const { scroll, isReady } = useLocomotiveScroll();

  //   the useEffect will run on the first rendering of the App component
  //   after two seconds (about how long it takes for the data to load)
  //   the loaded state will become true
  useEffect(() => {
    isReady && scroll.scrollTo(0, 0);
    let timer = setTimeout(() => setLoaded(false), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [scroll, pathname, isReady]);

  return (
    <>
      {loaded && location.pathname === "/" ? (
        <Loader />
      ) : (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollToTop>
            {/* <Cursor /> */}
            <ScrollToTop />

            <AnimatePresence>
              <main
                className="main-app"
                data-scroll-container
                ref={containerRef}
                style={{ position: "relative" }}
              >
                {/* <div data-aos="fade-up"
     data-aos-delay="2500"
     data-aos-duration="2500" style={{ position: "absolute", height: "100%", width: "100%" }}>
          <ParticleConfig />
        </div> */}
                <div className="app">
                  {/* using a ternary operator to determine which component to display
    based on the loaded state. If loaded is false the Loader is rendered */}
                  <>
                    <ScrollProxy />

                    <Routes scrollRestoration="auto">
                      <Route exact path="/" element={<Home />} />
                      <Route path="/deletion-policy" element={<Deletion />} />
                      <Route path="/privacy-policy" element={<Privacy />} />
                      <Route path="/terms-condition" element={<Terms />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/reset" element={<Reset />} />
                    </Routes>
                  </>
                </div>
              </main>
            </AnimatePresence>
          </ScrollToTop>
        </LocomotiveScrollProvider>
      )}
    </>
  );
};

export default App;
