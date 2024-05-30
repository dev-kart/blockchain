// script.js

// This script runs when the page loads
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("The DOM is fully loaded and parsed");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  const email = document.querySelector('input[type="email"]');
  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return re.test(String(email).toLowerCase());
}

window.addEventListener("scroll", function () {
  const button = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy");

  const lazyLoad = function () {
    lazyImages.forEach((image) => {
      if (
        image.getBoundingClientRect().top <= window.innerHeight &&
        image.getBoundingClientRect().bottom >= 0
      ) {
        image.src = image.dataset.src;
        image.classList.remove("lazy");
      }
    });

    if (lazyImages.length === 0) {
      document.removeEventListener("scroll", lazyLoad);
    }
  };

  document.addEventListener("scroll", lazyLoad);
});
