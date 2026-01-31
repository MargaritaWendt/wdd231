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

/* Members (Directory page) */

const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");
const membersContainer = document.getElementById("members");

if (membersContainer) {
    async function getMembers() {
        try {
            const response = await fetch("data/members.json");

            const data = await response.json();
            displayMembers(data);

        } catch (error) {
            console.error("Error loading members:", error);

            membersContainer.innerHTML ="<p>❌ The members could not be loaded.</p>";
        }
    }

    getMembers();
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
      <img src="images/${member.image}" alt="${member.company}">
      <h3>${member.company}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Website</a>
      <p>Membership: ${member.membership}</p>
      <p>Contact: ${member.contact}</p>
    `;

        membersContainer.appendChild(card);
    });
}

if (gridBtn && listBtn && membersContainer) {
    gridBtn.addEventListener("click", () => {
        membersContainer.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        membersContainer.classList.add("list");
    });
}

/* second  */

import { loadSpotlight } from "./spotlight.mjs";

loadSpotlight();

import { initModals } from "./modal.mjs";

document.addEventListener('DOMContentLoaded', () => {
    initModals();
});