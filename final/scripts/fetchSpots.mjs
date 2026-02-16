export async function loadFechtspot() {
    const response = await fetch("data/germany-spot.json");
    const places = await response.json();

    // Mezclar array
    const shuffled = places.sort(() => 0.5 - Math.random());

    // Tomar solo 4
    const selected = shuffled.slice(0, 4);

    const container = document.getElementById("fechtspot");
    container.innerHTML = "";

    selected.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${place.name}</h3>
            <p><strong>Location:</strong> ${place.location}</p>
            <p>${place.description}</p>
            <p><strong>Type:</strong> ${place.type}</p>
            <p><strong>Coords:</strong> ${place.coords.lat}, ${place.coords.lng}</p>
        `;

        container.appendChild(card);
    });
}
