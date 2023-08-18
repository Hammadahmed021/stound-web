import React from "react";
import left from "../Assets/Images/left.png";
import right from "../Assets/Images/right.png";
import hqImg from "../Assets/Images/bigImg.png";

export default function HighQuality() {
  return (
    <>
      <section className="highQuality">
        <div className=" highQuality-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 text-center">
                <img src={left} alt="" className="img-fluid" />
                <div
                  className="blob text-left pt-4"
                  data-scroll={true}
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                >
                  <h2>Property Description</h2>
                  <p>
                    Include a well-written description that highlights the
                    unique selling points and features of the property. The
                    description should provide insights into the property's
                    architecture, amenities, surrounding landscape, and any
                    recent renovations.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <img
                  src={hqImg}
                  className="hq-image"
                  data-scroll={true}
                  data-scroll-speed="1"
                  data-scroll-direction="horizontal"
                />
              </div>
              <div className="col-4 text-right">
                <div
                  className="blob text-left pb-4"
                  data-scroll={true}
                  data-scroll-speed="-1"
                  data-scroll-direction="vertical"
                >
                  <h2>High-Quality Images</h2>
                  <p>
                    Showcase multiple high-resolution images and, if available,
                    videos that offer a virtual tour of the property. Visuals
                    play a critical role in capturing the attention of potential
                    buyers or tenants.
                  </p>
                </div>
                <img src={right} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
