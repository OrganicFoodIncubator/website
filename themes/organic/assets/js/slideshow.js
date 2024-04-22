"use strict";

const slideshow = document.getElementById("slideshow");
const leftButton = document.getElementById("slideshow-button-left");
const rightButton = document.getElementById("slideshow-button-right");

const slides = [
  "IMG_6384.jpg",
  "IMG_6387.jpg",
  "IMG_8087.jpg",
  "IMG_8088.jpg",
  "IMG_8091.jpg",
  "IMG_8093.jpg",
  "IMG_8095.jpg",
];

let currentSlideIndex = 0;

const slideshowRight = () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }

  slideshow.style.backgroundImage =
    "url(/slideshow/" + slides[currentSlideIndex] + ")";
};

const slideshowLeft = () => {
  if (currentSlideIndex === 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex--;
  }

  slideshow.style.backgroundImage =
    "url(/slideshow/" + slides[currentSlideIndex] + ")";
};

leftButton.addEventListener("click", slideshowLeft);
rightButton.addEventListener("click", slideshowRight);
