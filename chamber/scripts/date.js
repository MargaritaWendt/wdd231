const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModifiedP = document.querySelector("#last-modified");
lastModifiedP.textContent = document.lastModified;


const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        menuButton.textContent = "≡";
    } else {
        navMenu.style.display = "flex";
        menuButton.textContent = "❌";
    }
});
