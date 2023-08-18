import React from "react";
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

export default function IcongraphyM() {
  return (
    <>
      <section className="iconSection mt-5">
        <div className="container">
          <div className="row text-center iconSectionFirstRow pt-5 ">
            <div className="col-12">
              <h2
                className="globalHeading text-white"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="0.25"
              >
                Stound’s Iconography
              </h2>
              <p
                className="text-white"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="0.25"
              >
                "Discover our intuitive icongraphy, a visual language that
                simplifies navigation and enhances user experience."
              </p>
            </div>
          </div>
          <div className="row pt-3 pb-4 align-items-center justify-content-between border-light border-bottom row1">
            <div className="iconsdiv ">
              <img src={Name} alt="" />
              <p>Name</p>
            </div>
            <div className="iconsdiv ">
              <img src={Email} alt="" />
              <p>Email</p>
            </div>
            <div className="iconsdiv ">
              <img src={Contact} alt="" />
              <p>Contact</p>
            </div>
            <div className="iconsdiv ">
              <img src={Password} alt="" />
              <p>Password</p>
            </div>
            <div className="iconsdiv ">
              <img src={Show} alt="" />
              <p>Show</p>
            </div>
            <div className="iconsdiv ">
              <img src={Home} alt="" />
              <p>Home</p>
            </div>
            <div className="iconsdiv ">
              <img src={Favorite} alt="" />
              <p>Favourite</p>
            </div>

            <div className="iconsdiv ">
              <img src={Messages} alt="" />
              <p>Messages</p>
            </div>
            <div className="iconsdiv ">
              <img src={Profile} alt="" />
              <p>Profile</p>
            </div>
            <div className="iconsdiv ">
              <img src={Filters} alt="" />
              <p>Filters</p>
            </div>
            <div className="iconsdiv ">
              <img src={Notification} alt="" />
              <p>Notification</p>
            </div>
            <div className="iconsdiv ">
              <img src={Add} alt="" />
              <p>Add Post</p>
            </div>
            <div className="iconsdiv ">
              <img src={Location} alt="" />
              <p>Location</p>
            </div>
            <div className="iconsdiv ">
              <img src={Chat} alt="" />
              <p>New Chat</p>
            </div>

            <div className="iconsdiv ">
              <img src={Calender} alt="" />
              <p>Calender</p>
            </div>
            <div className="iconsdiv ">
              <img src={Call} alt="" />
              <p>Call</p>
            </div>
            <div className="iconsdiv ">
              <img src={Category} alt="" />
              <p>Ad Category</p>
            </div>
            <div className="iconsdiv ">
              <img src={Upload} alt="" />
              <p>Upload</p>
            </div>
            <div className="iconsdiv ">
              <img src={Title} alt="" />
              <p>Ad Tittle</p>
            </div>
            <div className="iconsdiv ">
              <img src={Send} alt="" />
              <p>Send</p>
            </div>
            <div className="iconsdiv ">
              <img src={Favorite} alt="" />
              <p>Favourite</p>
            </div>

            <div className="iconsdiv ">
              <img src={Coins} alt="" />
              <p>Coins</p>
            </div>
            <div className="iconsdiv ">
              <img src={About} alt="" />
              <p>About</p>
            </div>
            <div className="iconsdiv ">
              <img src={Privacy} alt="" />
              <p>Privacy</p>
            </div>
            <div className="iconsdiv ">
              <img src={Terms} alt="" />
              <p>Terms</p>
            </div>
            <div className="iconsdiv ">
              <img src={Rate} alt="" />
              <p>Rate Us</p>
            </div>
            <div className="iconsdiv ">
              <img src={LogOut} alt="" />
              <p>Log Out</p>
            </div>
            <div className="iconsdiv ">
              <img src={Deactivate} alt="" />
              <p>Deactivate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
