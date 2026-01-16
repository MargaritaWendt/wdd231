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