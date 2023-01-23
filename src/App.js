
import './App.css';
import React, { useState, useEffect, useRef } from "react";
import Loader from './Components/Loader';
import Home from './Screens/Home';
import SoundBar from './Components/SoundBar';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'; 
import { AnimatePresence } from 'framer-motion';
import ScrollProxy from './Components/ScrollProxy';
import AOS from "aos";
import "aos/dist/aos.css";
import ParticleConfig from './Components/ParticleConfig'
import Cursor from './Components/Cursor';
// import Draggable from './Components/Draggable';

const App = () => {
  AOS.init();
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null)

//   the useEffect will run on the first rendering of the App component
//   after two seconds (about how long it takes for the data to load)
//   the loaded state will become true
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <>
    {!loaded ? (
      <Loader />
   ) : (         
    <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
            {/* <Cursor /> */}
            {/* <Draggable /> */}
  <ScrollProxy />
  <AnimatePresence>
  <main className='main-app' data-scroll-container ref={containerRef} style={{ position: "relative" }}>
  <div data-aos="fade-up"
     data-aos-delay="2500"
     data-aos-duration="2000" style={{ position: "absolute", height: "100%", width: "100%" }}>
          <ParticleConfig />
        </div>
  <div className="app">
    {/* using a ternary operator to determine which component to display
    based on the loaded state. If loaded is false the Loader is rendered */}
    
        <>
        <Home />
        
        </>
     
    </div>
  </main>
  </AnimatePresence>
</LocomotiveScrollProvider>
)}
</>
  );
}

export default App;