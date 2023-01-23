import React from 'react'

const Work = () => {
  return (
    <>
      <section className='skill-slide'>
        <h2 >Skills.</h2>
        {/* <h2>Skills </h2> */}
        <div className="container" id="up">
          <h4> <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">HTML , Css , Bootstrap , Responsive </span></h4>
          <h4><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">Javascript , Jquery , React js , Vue js  </span></h4>
          <h4><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up"> Antdesign , MUI , AOS , GSAP </span></h4>
          <h4><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">Wordpress , Shopify , Wix  </span></h4>
          {/* <h4><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">Mobile  , Speed Optimize </span></h4> */}
        </div>
      </section>
    </>
  )
}

export default Work