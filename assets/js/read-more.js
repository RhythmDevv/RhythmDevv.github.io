// Function to toggle the visibility of testimonial text
function viewTestimonial(button) {
  // Find the associated testimonial text for this button
  var testimonialText = button.closest('.testimonial-content').querySelector('.testimonial-text');

  // Toggle the display of the testimonial text
  if (testimonialText.style.display === "none" || testimonialText.style.display === "") {
    testimonialText.style.display = "block";
    button.textContent = "Hide Testimonial";  // Change button text to 'Hide Testimonial'
  } else {
    testimonialText.style.display = "none";
    button.textContent = "View Testimonial";  // Change button text to 'View Testimonial'
  }
}

// Extra code for mobile menu

// Toggle the menu on mobile
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.add("open");
});

document.getElementById("menu-close").addEventListener("click", function() {
    document.querySelector(".menu").classList.remove("open");
});

