document.addEventListener("DOMContentLoaded", () => {
    // HAMBURGUER
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            if (navMenu.style.display === "flex") {
                navMenu.style.display = "none";
                menuButton.textContent = "≡";
            } else {
                navMenu.style.display = "flex";
                menuButton.textContent = "❌";
            }
        });
    }

    // MODULOS
    import("./thankyou.mjs").then(module => module.thankYou());
    import("./fetchspots.mjs").then(module => module.fetchspots());
    import("./modal.mjs").then(module => module.initModals());
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