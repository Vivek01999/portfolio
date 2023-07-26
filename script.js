document.addEventListener("DOMContentLoaded", function () {
  const chatButton = document.getElementById("chat-button");
  const contactForm = document.getElementById("contact-form");

  chatButton.addEventListener("click", function () {
    if (contactForm.style.display = "none"){
      contactForm.style.display = "block";
    }else{
      contactForm.style.display = "none";
  }
  });

  document.addEventListener("click", function (event) {
      if (!contactForm.contains(event.target) && !chatButton.contains(event.target)) {
          contactForm.style.display = "none";
      }
  });
});
