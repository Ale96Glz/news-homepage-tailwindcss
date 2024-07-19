console.log("dasdasdasd");
const menuButton = document.getElementById("menu");
const menuClose = document.getElementById("close");
const menuHidden = document.getElementById("menu-hidden");
const menuOverlay = document.getElementById("menu-overlay");
const body = document.querySelector("body");

menuButton.addEventListener("click", () => {
  menuHidden.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
  menuHidden.classList.add("hidden");
});
