document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check empty fields
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all the fields.";
            formMessage.style.color = "red";
            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        // Send form through EmailJS
        emailjs.sendForm(
            "service_noy1yh7",
            "template_3vuu1jr",
            contactForm
        )
        .then(function () {

            formMessage.textContent =
                "Thank you, " + name + "! Your message has been sent successfully.";

            formMessage.style.color = "green";

            contactForm.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            formMessage.textContent =
                "Sorry, your message could not be sent. Please try again.";

            formMessage.style.color = "red";
        });
    });


    // Dark mode
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }

    });

});
