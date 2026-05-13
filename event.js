const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Message Sent Successfully!");

  contactForm.reset();

});