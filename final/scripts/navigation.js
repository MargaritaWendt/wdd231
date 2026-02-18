document.addEventListener("DOMContentLoaded", async () => {

    //HAMBURGER
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");

            if (navMenu.classList.contains("open")) {
                menuButton.textContent = "❌";
            } else {
                menuButton.textContent = "≡";
            }
        });
    }

    //MODALS
    try {
        const modalModule = await import("./modal.mjs");
        modalModule.initModals();
    } catch (error) {
        console.error("Modal module failed:", error);
    }

    //FETCH SPOTS
    try {
        const fetchModule = await import("./fetchspots.mjs");
        fetchModule.fetchspots();
    } catch (error) {
        console.error("Fetch module failed:", error);
    }

    //THANK YOU / LOCAL STORAGE
    try {
        const thankYouModule = await import("./thankyou.mjs");
        thankYouModule.thankYou();
        thankYouModule.trackSubmissions();
    } catch (error) {
        console.error("ThankYou module failed:", error);
    }

});