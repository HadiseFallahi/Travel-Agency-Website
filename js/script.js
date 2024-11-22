"use strick";

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////////////////////////

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

/////////////////////////////////////////////////////////////////////////

// Testimonial Slider

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");

  let currentSlide = 0;

  function showSlide(index) {
    sliders.forEach((slider, i) => {
      slider.classList.remove("active");
      if (i === index) {
        slider.classList.add("active");
      }
    });
  }

  btnPrev.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
    showSlide(currentSlide);
  });

  btnNext.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % sliders.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
});

/////////////////////////////////////////////////////////////////////////

// Menu Toggle

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

function closeMenu() {
  nav.classList.remove("active");
  menuToggle.querySelector(".close-outline").style.display = "none";
  menuToggle.querySelector(".menu-outline").style.display = "block";
}

menuToggle.addEventListener("click", function () {
  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    nav.classList.add("active");
    menuToggle.querySelector(".close-outline").style.display = "block";
    menuToggle.querySelector(".menu-outline").style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (
    nav.classList.contains("active") &&
    !nav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

document.querySelectorAll(".nav .nav-link").forEach((item) => {
  item.addEventListener("click", closeMenu);
});
