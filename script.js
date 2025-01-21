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
        alert(`Thank you, ${name}!`);

        // Show a full-screen image
        const imageContainer = document.createElement("div");
        imageContainer.style.position = "fixed";
        imageContainer.style.top = "0";
        imageContainer.style.left = "0";
        imageContainer.style.width = "100%";
        imageContainer.style.height = "100%";
        imageContainer.style.backgroundColor = "black"; // Optional: add a background color
        imageContainer.style.display = "flex";
        imageContainer.style.alignItems = "center";
        imageContainer.style.justifyContent = "center";
        imageContainer.style.zIndex = "1000";

        const image = document.createElement("img");
        image.src = "success.jpg"; // Replace with the path to your image file
        image.alt = "Success Image";
        image.style.maxWidth = "100%";
        image.style.maxHeight = "100%";

        // Append the image to the container
        imageContainer.appendChild(image);

        // Append the container to the body
        document.body.appendChild(imageContainer);

        // Hide the form
        form.style.display = "none";
    });
});
