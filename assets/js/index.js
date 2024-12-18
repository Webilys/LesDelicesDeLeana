//menu responsive

const nav = document.querySelector("nav");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

function openNav() {
  nav.style.display = "block";
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
}

function closeNav() {
  nav.style.display = "none";
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
}
