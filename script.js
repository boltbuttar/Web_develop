// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Get the form input values
        const email = document.getElementById("email").value.trim();
        const name = document.getElementById("name").value.trim();

        // Validate the inputs
        if (!email || !name) {
            alert("Please fill out all fields!");
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // If validation passes, display a success message
        alert(`Thank you, ${name}! Your form has been successfully submitted.`);
        
        // Optionally, clear the form
        form.reset();
    });
});
