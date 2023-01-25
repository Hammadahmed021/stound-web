import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import AOS from "aos";

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
  const [darkMode, setDarkMode] = useState(false);


  useLayoutEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if (darkMode === true) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
    AOS.init();
    AOS.refresh();

    return () => {

    };
  }, [darkMode])


  return (
    <>
      <header>

        <section data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="container top-header">
            <div className=" row top-row">
              <div className="col-6">

                <p className='logo'><a href="mailto:Hammadahmed4015@gmail.com">HA</a></p>
              </div>
              <div className="col-6">

                <ul className="ul-links" >
                  <li><a href="mailto:Hammadahmed4015@gmail.com">Mail</a></li>
                  <li>
                    <div
                    id="toggle"
                    onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
                  >
                    <div className="toggle-inner" />
                    </div>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="banner-text"><h2><span className='author-name'>Hammad Ahmed </span><br /> <span className="banner-subtext">Frontend UI/UX and CMS Developer.</span></h2></div>
          <div class="scrolldown">

          </div>
          <div className="vertical-scroll">
            <p >scroll</p>
          </div>
        </section>
      </header>
    </>
  )
}

export default Banner


