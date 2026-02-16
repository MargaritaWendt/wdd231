export async function loadFechtspotWithMap() {
    try {
        const response = await fetch("data/fechtspot.json");
        const places = await response.json();

        // Mostrar 4 cards
        const shuffled = places.sort(() => 0.5 - Math.random());
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
            `;
            container.appendChild(card);
        });

        // Mapa simple
        const map = L.map("map").setView([51.1657, 10.4515], 6); // centro de Alemania

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        // Agregar todos los marcadores
        places.forEach(place => {
            L.marker([place.coords.lat, place.coords.lng])
                .addTo(map)
                .bindPopup(`<strong>${place.name}</strong><br>${place.location}`);
        });

    } catch (error) {
        console.error("Error loading fechtspot:", error);
        document.getElementById("fechtspot").innerHTML = "<p>❌ Could not load places.</p>";
    }
}
