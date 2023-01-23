// import React from 'react'
// import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { InertiaPlugin } from "gsap/InertiaPlugin";


// gsap.registerPlugin( Draggable, InertiaPlugin);



// const friction = -0.5;


// const ball = document.querySelector(".ball");
// const ballProps = gsap.getProperty(ball);
// const radius = ball.getBoundingClientRect().width / 2;
// const tracker = InertiaPlugin.track(ball, "x,y")[0];

// let vw = window.innerWidth;
// let vh = window.innerHeight;

// gsap.defaults({
//   overwrite: true
// });

// gsap.set(ball, {
//   xPercent: -50,
//   yPercent: -50,
//   x: vw / 2,
//   y: vh / 2
// });

// const draggable = new Draggable(ball, {
//   bounds: window,
//   onPress() {
//     gsap.killTweensOf(ball);
//     this.update();
//   },
//   onDragEnd: animateBounce,
//   onDragEndParams: []
// });

// window.addEventListener("resize", () => {
//   vw = window.innerWidth;
//   vh = window.innerHeight;
// });

// function animateBounce(x = "+=0", y = "+=0", vx = "auto", vy = "auto") {
    
//   gsap.fromTo(ball, { x, y }, {
//     inertia: {
//       x: vx,
//       y: vy,
//     },
//     onUpdate: checkBounds
//   });  
// }

// function checkBounds() {
  
//   let r = radius;    
//   let x = ballProps("x");
//   let y = ballProps("y");
//   let vx = tracker.get("x");
//   let vy = tracker.get("y");
//   let xPos = x;
//   let yPos = y;

//   let hitting = false;

//   if (x + r > vw) {
//     xPos = vw - r;
//     vx *= friction;
//     hitting = true;

//   } else if (x - r < 0) {
//     xPos = r;
//     vx *= friction;
//     hitting = true;
//   }

//   if (y + r > vh) {
//     yPos = vh - r;
//     vy *= friction;
//     hitting = true;

//   } else if (y - r < 0) {
//     yPos = r;
//     vy *= friction;
//     hitting = true;
//   }

//   if (hitting) {
//     animateBounce(xPos, yPos, vx, vy);
//   } 
// }

// const DraggableTog = () => {
//   return (
//     <div><div class="ball"></div>
//     </div>
//   )
// }
// export default DraggableTog;