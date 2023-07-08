// navigation bar
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
// ********Carousel***********
const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const sliderWrapper = slider.parentNode;
  const sliderCards = slider.querySelectorAll(".slider-card");
  const prevButton = sliderWrapper.querySelector(".slider-control.prev");
  const nextButton = sliderWrapper.querySelector(".slider-control.next");
  const cardWidth = sliderCards[0].offsetWidth;
  let currentPosition = 0;

  nextButton.addEventListener("click", () => {
    currentPosition -= cardWidth;
    if (currentPosition < -((sliderCards.length - 3) * cardWidth)) {
      currentPosition = -((sliderCards.length - 3) * cardWidth);
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  });

  prevButton.addEventListener("click", () => {
    currentPosition += cardWidth;
    if (currentPosition > 0) {
      currentPosition = 0;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  });
});

//slider
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainers = document.querySelectorAll(".scroll");
  const leftButtons = document.querySelectorAll(".left-btn");
  const rightButtons = document.querySelectorAll(".right-btn");

  scrollContainers.forEach((scrollContainer, index) => {
    let isDown = false;
    let scrollX;
    let scrollLeft;

    // Mouse Up Function
    scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    });

    // Mouse Leave Function
    scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    });

    // Mouse Down Function
    scrollContainer.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDown = true;
      scrollContainer.classList.add("active");
      scrollX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    // Mouse Move Function
    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const element = e.pageX - scrollContainer.offsetLeft;
      const scrolling = (element - scrollX) * 2;
      scrollContainer.scrollLeft = scrollLeft - scrolling;
    });

    // Left Button Click Function
    leftButtons[index].addEventListener("click", () => {
      scrollContainers[index].scrollLeft -= 500; // Adjust the scrolling amount as needed
    });

    // Right Button Click Function
    rightButtons[index].addEventListener("click", () => {
      scrollContainers[index].scrollLeft += 500; // Adjust the scrolling amount as needed
    });
  });
});
