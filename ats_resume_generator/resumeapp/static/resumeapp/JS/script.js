document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const successMessage = document.createElement("p");
    successMessage.className = "success-message";

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#ddd";
            }
        });

        if (valid) {
            successMessage.textContent = "Form submitted successfully!";
            form.appendChild(successMessage);
            form.reset();
        } else {
            successMessage.textContent = "";
        }
    });
});
