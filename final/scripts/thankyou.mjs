export function thankYou() {
    document.addEventListener("DOMContentLoaded", () => {
        /*FORM*/
        const form = document.getElementById("myForm");
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault(); // Evita recargar la página

                const formData = {
                    fname: document.getElementById("fname").value,
                    lname: document.getElementById("lname").value,
                    email: document.getElementById("email").value,
                    phone: document.getElementById("phone").value,
                    description: document.getElementById("description").value,
                    timestamp: new Date().toISOString()
                };

                // 
                localStorage.setItem("formData", JSON.stringify(formData));

                // thankyou.html
                window.location.href = "thankyou.html";
            });
        }


        const fname = document.getElementById('fname');
        if (fname) {
            const data = JSON.parse(localStorage.getItem("formData"));
            if (!data) return;

            fname.textContent = data.fname;
            document.getElementById('lname').textContent = data.lname;
            document.getElementById('email').textContent = data.email;
            document.getElementById('phone').textContent = data.phone;
            document.getElementById('description').textContent = data.description;
            document.getElementById('timestamp').textContent = new Date(data.timestamp).toLocaleString();
        }

    });
}