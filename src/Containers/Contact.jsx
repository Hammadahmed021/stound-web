import React, {useLayoutEffect} from 'react'


const Contact = () => {
 
  return (
    <>
    <section className='footer-contact' >
  
      <div className='container'>
        <div className="row" >
          <div className="col-6">
            <h4>Hammad Ahmed, Frontend UI/UX<br /> and CMS Developer from Pakistan.</h4>
            {/* <ul className=" contact-details" >
                  
                </ul> */}
                <p className='copyright'> © <span>{(new Date().getFullYear())}</span> Made with &hearts;. All Rights Reserved. </p>
          </div>
          <div className="col-6">
          <ul className="ul-links" >
                  <li><a href="https://www.linkedin.com/in/hammad-ahmed-32b566169/">LinkedIn</a></li>
                  {/* <li><a href="">Github</a></li> */}
                  <li><a href="mailto:Hammadahmed4015@gmail.com">Mail</a></li>
                  {/* <li><a href="tel:03353302260">Phone</a></li> */}
                </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact