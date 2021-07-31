const tl = gsap.timeline();

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const videoDiv = document.querySelector("main .video");
const video = videoDiv.querySelector("video");
const button = document.querySelector("button");

let menuCount = 0;
let countVid = 0;

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    tl.to(menu, {
      x: `-100%`,
    });
    menuCount = 0;
  }
});
menuIcon.addEventListener("click", () => {
  menuCount++;
  if (menuCount === 2) {
    tl.to(".menu h1", { opacity: 0 })
      .to(".menu a", { opacity: 0, y: "10px", stagger: 0.3 })
      .to(menu, {
        x: `-100%`,
      });
    menuCount = 0;
  } else {
    tl.to(menu, { x: 0 })
      .to(".menu a", { opacity: 1, stagger: 0.3, y: 0 })
      .to(".menu h1", { opacity: 1 });
  }
});

button.addEventListener("click", () => {
  countVid++;

  if (countVid === 2) {
    button.innerHTML = "Play Now";
    tl.to(videoDiv, { opacity: 0 });
    video.pause();
    countVid = 0;
  } else {
    tl.to(videoDiv, { opacity: 1 });
    video.play();
    button.innerHTML = "Pause";
  }
});
