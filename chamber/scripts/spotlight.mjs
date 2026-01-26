export async function loadSpotlight() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        const eligibleMembers = members.filter(member => Number(member.membership) === 3 || Number(member.membership) === 2);

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