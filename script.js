// Initialize variables
var carousel = document.getElementById("carousel");
var images = carousel.getElementsByTagName("img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// Set first image as active
images[0].classList.add("active");

// Set up event listeners
prev.addEventListener("click", function() {
  // Get active image
  var active = carousel.querySelector(".active");
  // Remove active class from active image
  active.classList.remove("active");
  // Check if active image is the first image
  if (active.previousElementSibling) {
    // If it is not the first image, set the previous image as active
    active.previousElementSibling.classList.add("active");
  } else {
    // If it is the first image, set the last image as active
    images[images.length - 1].classList.add("active");
  }
});

next.addEventListener("click", function() {
  // Get active image
  var active = carousel.querySelector(".active");
  // Remove active class from active image
  active.classList.remove("active");
  // Check if active image is the last image
  if (active.nextElementSibling) {
    // If it is not the last image, set the next image as active
    active.nextElementSibling.classList.add("active");
  } else {
    // If it is the last image, set the first image as active
    images[0].classList.add("active");
  }
});
