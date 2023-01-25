import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

function initMarquee() {

    // Kill other animations
    animations.forEach(animation => animation.progress(0).kill())

    // Marquee speed (pixels per second)
    let velocity = 150;

    let offset = 0
    let itemWidth = 0
    let rowWidth = 0

    let marqueeItems = gsap.utils.toArray('.about-hero__marquee-item')

    // Calculate row width
    marqueeItems.forEach(e => {
        rowWidth += e.getBoundingClientRect().width
    })

    // Animation Loop
    marqueeItems.forEach((e, i) => {

        // Reset item positions
        gsap.set(e, { x: 0 })

        itemWidth = e.getBoundingClientRect().width

        let tl = new gsap.timeline({ repeat: -1 });

        // Animate item to end of row
        tl.to(e, {
            ease: "none",
            duration: ((rowWidth - offset - itemWidth) / velocity),
            x: (rowWidth - offset - itemWidth),
        });

        // Send item to beginning
        tl.to(e, {
            ease: "none",
            duration: 0,
            x: ((offset + itemWidth) * -1)
        })

        // Animate to original position
        tl.to(e, {
            ease: "none",
            duration: ((offset + itemWidth) / velocity),
            x: 0
        })

        // Increment offset
        offset += itemWidth

        animations.push(tl)
    })
}

let animations = []

initMarquee()

var timer
function handleResize() {
    clearTimeout(timer)
    timer = setTimeout(initMarquee, 500)
}

window.addEventListener('resize', handleResize)

const Marquee = () => {
    useLayoutEffect(() => {
        initMarquee()

        return () => {

        };
    }, [])

    return (
        <div>
            <section class="about-hero">
                <div class="about-hero__content  flex items-center">
                    <div class="flex flex-col justify-center w-full">
                        <div class="about-hero__marquee w-full">
                            <div class="about-hero__marquee-row" role="marquee">
                                <div class="about-hero__marquee-item">
                                    <span class="about-hero__marquee-item-text">Let's Discuss Your Project?</span>
                                </div>
                                <div class="about-hero__marquee-item about-hero__marquee-item--stroke">
                                    <span class="about-hero__marquee-item-text">Web Developer.</span>
                                </div>
                                <div class="about-hero__marquee-item">
                                    <span class="about-hero__marquee-item-text">Let's Discuss Your Project?</span>
                                </div>
                                <div class="about-hero__marquee-item about-hero__marquee-item--stroke">
                                    <span class="about-hero__marquee-item-text">Keen Listener.</span>
                                </div>
                                <div class="about-hero__marquee-item">
                                    <span class="about-hero__marquee-item-text">Let's Discuss Your Project?</span>
                                </div>
                                <div class="about-hero__marquee-item about-hero__marquee-item--stroke">
                                    <span class="about-hero__marquee-item-text">Creative Individual.    </span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Marquee;
