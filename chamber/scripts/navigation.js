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

const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        const data = await response.json();
        displayMembers(data);

    } catch (error) {
        console.error("Error loading members:", error);

        document.getElementById("members").innerHTML =
            "<p>❌ The members could not be loaded.</p>";
    }
}

function displayMembers(members) {
    const container = document.getElementById("members");
    container.innerHTML = "";

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

        container.appendChild(card);
    });
}

/* Toggle views */

gridBtn.addEventListener("click", () => {
    container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    container.classList.add("list");
});

getMembers();

/* second  */

async function loadSpotlight() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        const eligibleMembers = members.filter(member => member.membership === 3 || member.membership === 2);

        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

        const spotlights = shuffled.slice(0, 3);

        const container = document.getElementById("spotlight");
        container.innerHTML = "";

        spotlights.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.company}" class="member-logo">
                <h3>${member.company}</h3>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership:</strong> ${member.membership}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading spotlight members:", error);
        document.getElementById("spotlight").innerHTML = "<p>❌ The spotlight members could not be loaded.</p>";
    }
}

// Llamamos la función
loadSpotlight();