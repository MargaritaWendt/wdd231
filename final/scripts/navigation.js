/*HAMBURGUER*/

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


/*THANYOU*/

import { thankYou } from "./thankyou.mjs";

thankYou()

/*FECHSPOTS*/

import { fetchspots } from "./fetchspots.mjs";

fetchspots()

/*MODALS*/

import { initModals } from "./modal.mjs";

document.addEventListener('DOMContentLoaded', () => {
    initModals();
});