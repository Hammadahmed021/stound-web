import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import hscorp from '../Assets/Images/hs-corp.png'
import baigmetal from '../Assets/Images/baigmetal.png'
import gorillafilm from '../Assets/Images/gorillafilm.png'
import activesol from '../Assets/Images/activesol.png'
import mhs from '../Assets/Images/mhs.png'



const Service = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let t1 = gsap.timeline();
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.main-app',
          scrub: true,
          pin: true,
          // markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none',
      })

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.main-app',
          scrub: true,
          // markers: true,
        },
        x: -pinWrapWidth,
        ease: 'none',
      })

      ScrollTrigger.refresh();

    }, 1000);

    return () => {

    };
  }, [])


  return (
    <>
    <section className='service-section' ref={ref} >
      <h2 >Work.</h2>
      {/* <div className='service-left'>
         
        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
    </div> */}
      <div className='service-right' ref={horizontalRef}>

        <div className='work-card' style={{ background: `url(${hscorp})` }}>
          <div className="card-ribbon">
            <h4 className="tech">Wordpress</h4>
          </div>

          <div className="card-title">
            <a href="https://hscorporation.com.pk/" target='_blank'>
              <h2>HS Corporation</h2>
            </a>

          </div>

          </div>
          <div className='work-card' style={{ background: `url(${mhs})` }}>
          <div className="card-ribbon">
            <h4 className="tech">Wordpress</h4>
          </div>

          <div className="card-title">
            <a href="https://mhscollections.com/" target='_blank'>
              <h2>MHS Collections</h2>
            </a>

          </div>

        </div>
        <div className='work-card' style={{ background: `url(${gorillafilm})` }}>
          <div className="card-ribbon">
            <h4 className="tech">React js</h4>
          </div>

          <div className="card-title">
            <a href="https://gorillafilm.com/" target='_blank'>
              <h2>Gorilla Film</h2>
            </a>

          </div>

        </div>
        <div className='work-card' style={{ background: `url(${baigmetal})` }}>
          <div className="card-ribbon">
            <h4 className="tech">Wordpress</h4>
          </div>

          <div className="card-title">
            <a href="https://baigmetal.com.pk/" target='_blank'>
              <h2>Baig Metal Craft</h2>
            </a>

          </div>

        </div>
        <div className='work-card' style={{ background: `url(${activesol})` }}>
          <div className="card-ribbon">
            <h4 className="tech">Wordpress</h4>
          </div>

          <div className="card-title">
            <a href="https://theactivesolutions.com/" target='_blank'>
              <h2>The Active Solutions</h2>
            </a>

          </div>

        </div>




      </div>


  
      </section>
      {/* <section className="mob-work">
      <h2 >Work.</h2>
      <div className='service-right-mob'>

<div className='work-card' style={{ background: `url(${hscorp})` }}>
  <div className="card-ribbon">
    <h4 className="tech">Wordpress</h4>
  </div>

  <div className="card-title">
    <a href="https://hscorporation.com.pk/" target='_blank'>
      <h2>HS Corporation</h2>
    </a>

  </div>

</div>
<div className='work-card' style={{ background: `url(${gorillafilm})` }}>
  <div className="card-ribbon">
    <h4 className="tech">React js</h4>
  </div>

  <div className="card-title">
    <a href="https://gorillafilm.com/" target='_blank'>
      <h2>Gorilla Film</h2>
    </a>

  </div>

</div>
<div className='work-card' style={{ background: `url(${baigmetal})` }}>
  <div className="card-ribbon">
    <h4 className="tech">Wordpress</h4>
  </div>

  <div className="card-title">
    <a href="https://baigmetal.com.pk/" target='_blank'>
      <h2>Baig Metal Craft</h2>
    </a>

  </div>

</div>
<div className='work-card' style={{ background: `url(${activesol})` }}>
  <div className="card-ribbon">
    <h4 className="tech">Wordpress</h4>
  </div>

  <div className="card-title">
    <a href="https://theactivesolutions.com/" target='_blank'>
      <h2>The Active Solutions</h2>
    </a>

  </div>

</div>




</div>
    </section> */}

      </>
  )
}

export default Service