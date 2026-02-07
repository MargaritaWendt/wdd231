
import { places } from "../data/discover.mjs";
const main = document.querySelector("main");
const section = document.createElement("section");
section.classList.add("discover-cards");

places.forEach(place => {
    const card = document.createElement("article");
    card.classList.add("discover-card");

    const title = document.createElement("h2");
    title.textContent = place.name;

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = place.image;
    img.alt = place.name;
    img.loading = "lazy";
    figure.appendChild(img);

    const address = document.createElement("address");
    address.textContent = place.address;

    const description = document.createElement("p");
    description.textContent = place.description;

    const button = document.createElement("button");
    button.textContent = "Learn more";
    button.setAttribute("aria-label", `Learn more about ${place.name}`);

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    section.appendChild(card);
});

main.appendChild(section);


// VISIT MESSAGE USING LOCALSTORAGE
const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysPassed < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${daysPassed} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);
