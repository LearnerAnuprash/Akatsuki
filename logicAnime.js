const navbar = document.getElementById("navbar");
let scrollTimeout;

window.addEventListener("scroll", () => {
  navbar.style.opacity = "0.5";

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    navbar.style.opacity = "1";
  }, 200);
});

const drop = document.querySelector("ul");
const dropElements = document.querySelectorAll(".flexibleDropdown");
const members = document.querySelector(".dropdown-menu");
drop.style.display = "none";
let dropCount = 1;
members.addEventListener("click", () => {
  if (dropCount % 2 == 0) {
    drop.style.display = "none";
    dropCount++;
  } else {
    drop.style.display = "block";
    dropCount++;
  }
});

dropElements.addEventListener("click", () => {
  drop.style.display = "none";
});
