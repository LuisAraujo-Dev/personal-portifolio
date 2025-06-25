document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menuToggle");
  const navLinks = document.querySelector(".navLinks");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
