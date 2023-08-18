import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  About,
  Add,
  Calender,
  Call,
  Category,
  Chat,
  Coins,
  Contact,
  Deactivate,
  Description,
  Email,
  Favorite,
  Filters,
  Home,
  Location,
  LogOut,
  Messages,
  Name,
  Notification,
  Password,
  Privacy,
  Profile,
  Rate,
  Send,
  Show,
  Terms,
  Title,
  Upload,
} from "../Assets/Icons";

export default function Icongraphy() {
  gsap.registerPlugin(ScrollTrigger);
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".iconSection",
          start: "center center",
          end:'',
          scroller: ".main-app",
          scrub: true,
          // markers: true,
          pin: true,
       
        },
      });
      
      tl.to(".row1 .icon1", {  duration: 1, opacity: 1 });
      tl.to(".row1 .icon2", {  duration: 0.9, opacity: 1 });
      tl.to(".row1 .icon3", {  duration: 0.8, opacity: 1 });
      tl.to(".row1 .icon4", {  duration: 0.7, opacity: 1 });
      tl.to(".row1 .icon5", {  duration: 0.6, opacity: 1 });
      tl.to(".row1 .icon6", {  duration: 0.5, opacity: 1 });
      tl.to(".row1 .icon7", {  duration: 0.4, opacity: 1 });

      tl.to(".row2 .icon1", {  duration: 1, opacity: 1 });
      tl.to(".row2 .icon2", {  duration: 0.9, opacity: 1 });
      tl.to(".row2 .icon3", {  duration: 0.8, opacity: 1 });
      tl.to(".row2 .icon4", {  duration: 0.7, opacity: 1 });
      tl.to(".row2 .icon5", {  duration: 0.6, opacity: 1 });
      tl.to(".row2 .icon6", {  duration: 0.5, opacity: 1 });
      tl.to(".row2 .icon7", {  duration: 0.4, opacity: 1 });

      tl.to(".row3 .icon1", {  duration: 1, opacity: 1 });
      tl.to(".row3 .icon2", {  duration: 0.9, opacity: 1 });
      tl.to(".row3 .icon3", {  duration: 0.8, opacity: 1 });
      tl.to(".row3 .icon4", {  duration: 0.7, opacity: 1 });
      tl.to(".row3 .icon5", {  duration: 0.6, opacity: 1 });
      tl.to(".row3 .icon6", {  duration: 0.5, opacity: 1 });
      tl.to(".row3 .icon7", {  duration: 0.4, opacity: 1 });

      tl.to(".row4 .icon1", {  duration: 1, opacity: 1 });
      tl.to(".row4 .icon2", {  duration: 0.9, opacity: 1 });
      tl.to(".row4 .icon3", {  duration: 0.8, opacity: 1 });
      tl.to(".row4 .icon4", {  duration: 0.7, opacity: 1 });
      tl.to(".row4 .icon5", {  duration: 0.6, opacity: 1 });
      tl.to(".row4 .icon6", {  duration: 0.5, opacity: 1 });
      tl.to(".row4 .icon7", {  duration: 0.4, opacity: 1 });

      ScrollTrigger.refresh();
    }, 1000);

  });

    return () =>  ctx.revert();
  }, []);
  return (
    <>
     <section className="iconSection">
        <div className="container">
          <div className="row text-center iconSectionFirstRow pt-5 pb-5">
            <div className="col-12">
              <h2 className="globalHeading text-white" data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'>Stound’s Iconography</h2>
              <p className="text-white" data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'>
                "Discover our intuitive icongraphy, a visual language that
                simplifies navigation and enhances user experience."
              </p>
            </div>
          </div>
          <div className="row pt-3 pb-4 align-items-center justify-content-between border-light border-bottom row1">
            <div className="iconsdiv icon1">
              <img src={Name} alt="" />
              <p>Name</p>
            </div>
            <div className="iconsdiv icon2">
              <img src={Email} alt="" />
              <p>Email</p>
            </div>
            <div className="iconsdiv icon3">
              <img src={Contact} alt="" />
              <p>Contact</p>
            </div>
            <div className="iconsdiv icon4">
              <img src={Password} alt="" />
              <p>Password</p>
            </div>
            <div className="iconsdiv icon5">
              <img src={Show} alt="" />
              <p>Show</p>
            </div>
            <div className="iconsdiv icon6">
              <img src={Home} alt="" />
              <p>Home</p>
            </div>
            <div className="iconsdiv icon7">
              <img src={Favorite} alt="" />
              <p>Favourite</p>
            </div>
          </div>
       

          <div className="row pt-4 pb-4 align-items-center justify-content-between border-light border-bottom row2">
            <div className="iconsdiv icon1">
              <img src={Messages} alt="" />
              <p>Messages</p>
            </div>
            <div className="iconsdiv icon2">
              <img src={Profile} alt="" />
              <p>Profile</p>
            </div>
            <div className="iconsdiv icon3">
              <img src={Filters} alt="" />
              <p>Filters</p>
            </div>
            <div className="iconsdiv icon4">
              <img src={Notification} alt="" />
              <p>Notification</p>
            </div>
            <div className="iconsdiv icon5">
              <img src={Add} alt="" />
              <p>Add Post</p>
            </div>
            <div className="iconsdiv icon6">
              <img src={Location} alt="" />
              <p>Location</p>
            </div>
            <div className="iconsdiv icon7">
              <img src={Chat} alt="" />
              <p>New Chat</p>
            </div>
          </div>

          <div className="row pt-4 pb-4 align-items-center justify-content-between border-light border-bottom row3">
            <div className="iconsdiv icon1">
              <img src={Calender} alt="" />
              <p>Calender</p>
            </div>
            <div className="iconsdiv icon2">
              <img src={Call} alt="" />
              <p>Call</p>
            </div>
            <div className="iconsdiv icon3">
              <img src={Category} alt="" />
              <p>Ad Category</p>
            </div>
            <div className="iconsdiv icon4">
              <img src={Upload} alt="" />
              <p>Upload</p>
            </div>
            <div className="iconsdiv icon5">
              <img src={Title} alt="" />
              <p>Ad Tittle</p>
            </div>
            <div className="iconsdiv icon6">
              <img src={Send} alt="" />
              <p>Send</p>
            </div>
            <div className="iconsdiv icon7">
              <img src={Favorite} alt="" />
              <p>Favourite</p>
            </div>
          </div>

          <div className="row pt-4 pb-3 align-items-center justify-content-between row4">
            <div className="iconsdiv icon1">
              <img src={Coins} alt="" />
              <p>Coins</p>
            </div>
            <div className="iconsdiv icon2">
              <img src={About} alt="" />
              <p>About</p>
            </div>
            <div className="iconsdiv icon3">
              <img src={Privacy} alt="" />
              <p>Privacy</p>
            </div>
            <div className="iconsdiv icon4">
              <img src={Terms} alt="" />
              <p>Terms</p>
            </div>
            <div className="iconsdiv icon5">
              <img src={Rate} alt="" />
              <p>Rate Us</p>
            </div>
            <div className="iconsdiv icon6">
              <img src={LogOut} alt="" />
              <p>Log Out</p>
            </div>
            <div className="iconsdiv icon7">
              <img src={Deactivate} alt="" />
              <p>Deactivate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
