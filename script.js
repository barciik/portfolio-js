const contactShadow = document.getElementById("contact-shadow");
const contactSection = document.getElementById("contact-section");
const contactContainer = document.getElementById("contact-container");
const contactBtn = document.getElementById("contact-button");

contactShadow.addEventListener("click", () => {
  contactContainer.style.left = "100vw";
  contactSection.style.opacity = "0";
  contactSection.style.zIndex = "-1";
  document.body.classList.remove("no-scroll");
});

contactBtn.addEventListener("click", () => {
  contactContainer.style.left = "0";
  contactSection.style.opacity = "1";
  contactSection.style.zIndex = "6";
  document.body.classList.add("no-scroll");
});
