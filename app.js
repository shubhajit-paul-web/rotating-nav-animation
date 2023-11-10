const navbar = document.querySelector(".nav");
const menuIconBox = document.querySelector(".menu-icons");
const mainContainer = document.querySelector(".main-container");

document.querySelector(".open").addEventListener("click", () => {
    navbar.classList.add("active");
    menuIconBox.classList.add("active");
    mainContainer.classList.add("active");
});

document.querySelector(".close").addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIconBox.classList.remove("active");
    mainContainer.classList.remove("active");
});