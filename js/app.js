const nav = document.querySelector(".show-nav");
const links = document.querySelector(".links");
const linksWrapper = document.querySelector(".links-wrapper");

const headerLeft = document.querySelector(".header-left");
const headerContent = document.querySelector(".header-content");
const headerRight = document.querySelector(".header-right");

nav.addEventListener("click", function () {
  if (linksWrapper.classList.contains("show-links")) {
    linksWrapper.classList.remove("show-links");
    headerLeft.classList.remove("hide");
    headerContent.classList.remove("hide");
    headerRight.classList.remove("transformed");
    nav.classList.remove("rotation");
    nav.classList.add("rotation-back");
  } else {
    linksWrapper.classList.add("show-links");
    headerLeft.classList.add("hide");
    headerContent.classList.add("hide");
    headerRight.classList.add("transformed");
    nav.classList.remove("rotation-back");
    nav.classList.add("rotation");
  }
});

const firstSliderDot = document.getElementById("firstSliderDot");
const secondSliderDot = document.getElementById("secondSliderDot");
const thirdSliderDot = document.getElementById("thirdSliderDot");
const sliderImage = document.getElementById("sliderImage");

firstSliderDot.addEventListener("click", function () {
  sliderImage.src = "images/slider-image1.jpg";
});
secondSliderDot.addEventListener("click", function () {
  sliderImage.src = "images/slider-image2.jpg";
});
thirdSliderDot.addEventListener("click", function () {
  sliderImage.src = "images/slider-image3.jpg";
});
