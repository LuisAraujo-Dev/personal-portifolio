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

  const sections = document.querySelector("section");

  const observer = new IntersectionObserver(
    (entries, observar) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sectionVisible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    section.classList.add("sectionHidden");
    observer.observe(section);
  });
});
