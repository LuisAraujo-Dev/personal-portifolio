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

  const animatedElements = document.querySelectorAll(
    "section, .project, .cardContent, .imageCertification"
  );

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

  animatedElements.forEach((el) => {
    el.classList.add("sectionHidden");
    observer.observe(el);
  });

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
});
