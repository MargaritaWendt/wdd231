export function thankYou() {

    const params = new URLSearchParams(window.location.search);

    document.getElementById("fname").textContent = params.get("fname") || "";
    document.getElementById("lname").textContent = params.get("lname") || "";
    document.getElementById("email").textContent = params.get("email") || "";
    document.getElementById("phone").textContent = params.get("phone") || "";
    document.getElementById("description").textContent = params.get("description") || "";

}

export function trackSubmissions() {
        const countEl = document.getElementById("submit-count");
        if (!countEl) return;

        // Counting 0
        let submitCount = Number(localStorage.getItem("submitCount")) || 0;
        submitCount++; // +
        localStorage.setItem("submitCount", submitCount);

        // Show
        countEl.textContent = `You have submitted the form ${submitCount} ${submitCount === 1 ? "time" : "times"}.`;

}