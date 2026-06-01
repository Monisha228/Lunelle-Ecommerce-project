const offers = [
  {
    id: 1,
    text: "🔥 Flat 50% OFF on Summer Collection",
  },
  {
    id: 2,
    text: "🛍 Buy 1 Get 1 Free Today",
  },
  {
    id: 3,
    text: "🚚 Free Shipping Above ₹999",
  },
  {
    id: 4,
    text: "✨ New Arrivals Just Dropped",
  },
];

const offerslider = document.getElementById("offer-slider");

let currentIndex = 0;

function changeOffer() {
  offerslider.textContent = offers[currentIndex].text;

  currentIndex++;

  if (currentIndex >= offers.length) {
    currentIndex = 0;
  }
}

changeOffer();

setInterval(changeOffer, 3000);

const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");

searchBtn.addEventListener("click", function () {
  searchBox.classList.toggle("active");
  searchBox.querySelector("input").focus();
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-bottom");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});

const navbar = document.querySelector(".navbar-top-wrapper");
const navbarMenu = document.querySelector(".nav-bottom");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    if (currentScroll > lastScroll) {
      navbar.classList.add("hide");
      navbarMenu.classList.add("top");
    } else {
      navbar.classList.remove("hide");
      navbarMenu.classList.remove("top");
    }
  } else {
    navbar.classList.remove("hide");
    navbarMenu.classList.remove("top");
  }

  lastScroll = currentScroll;
});
