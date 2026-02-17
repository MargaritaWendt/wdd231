export function fetchspots() {

    const container = document.querySelector("#fechtspot");
    if (!container) return

    async function getSpots() {
        try {
            const response = await fetch("data/germany-spots.json");

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const spots = await response.json();

            displaySpots(spots);

        } catch (error) {
            console.error("Error fetching data:", error);
            container.innerHTML = `<p>Failed to load spots.</p>`;
        }
    }


    /*DISPLAY SPOTS*/

    function displaySpots(spots) {

        const cards = spots.map(spot => {
            return `
            <div class="card">
                <div class="card-info">
                    <h2>${spot.name}</h2>
                    <p><strong>Location:</strong> ${spot.location}</p>
                    <p><strong>Description:</strong> ${spot.description}</p>
                    <p><strong>Type:</strong> ${spot.type}</p>
                </div>
                <div class="card-map">
                    <iframe 
                        width="300" 
                        height="200" 
                        style="border:0" 
                        loading="lazy" 
                        allowfullscreen
                        src="https://www.google.com/maps?q=${spot.coords.lat},${spot.coords.lng}&z=14&output=embed">
                    </iframe>
                </div>
            </div>
            `;
        });

        container.innerHTML = cards.join("");
    }

    getSpots();
}
