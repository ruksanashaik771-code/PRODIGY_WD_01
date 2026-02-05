const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

/* FUNCTION TO SET BACKGROUND COLOR */
function setBackground(sectionId) {
  switch (sectionId) {
    case "home":
      document.body.style.backgroundColor = "#3a1c71";
      break;
    case "about":
      document.body.style.backgroundColor = "#2193b0";
      break;
    case "services":
      document.body.style.backgroundColor = "#7f00ff";
      break;
    case "contact":
      document.body.style.backgroundColor = "#232526";
      break;
    default:
      document.body.style.backgroundColor = "#3a1c71";
  }
}

/* SET HOME BACKGROUND ON PAGE LOAD */
window.addEventListener("load", () => {
  setBackground("home");
});

/* SCROLL EVENTS */
window.addEventListener("scroll", () => {

  /* NAVBAR COLOR CHANGE */
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  /* FIND CURRENT SECTION */
  let currentSection = "home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - window.innerHeight / 2;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  /* CHANGE BACKGROUND */
  setBackground(currentSection);

  /* ACTIVE MENU */
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
