document.addEventListener("DOMContentLoaded", function () {

    // ==================== Contact Form ====================

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            // Prevent page refresh
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // ==================== Empty Field Validation ====================

            if (name === "" || email === "" || message === "") {

                formMessage.textContent =
                    "⚠️ Please fill in all the fields.";

                formMessage.className = "form-message error";

                return;
            }

            // ==================== Email Validation ====================

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "⚠️ Please enter a valid email address.";

                formMessage.className = "form-message error";

                return;
            }

            // ==================== Sending Message ====================

            formMessage.textContent =
                "⏳ Sending your message...";

            formMessage.className = "form-message sending";


            emailjs.sendForm(
                "service_noy1yh7",
                "template_3vuu1jr",
                contactForm
            )

            .then(function () {

                // Success message
                formMessage.textContent =
                    "✅ Message sent successfully! Thank you, " +
                    name +
                    ". I’ll get back to you soon.";

                formMessage.className = "form-message success";

                // Clear form
                contactForm.reset();

            })

            .catch(function (error) {

                console.error("EmailJS Error:", error);

                formMessage.textContent =
                    "❌ Sorry, your message could not be sent. Please try again.";

                formMessage.className = "form-message error";

            });

        });

    }


    // ==================== Dark Mode ====================

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeToggle.textContent = "☀️";

            } else {

                themeToggle.textContent = "🌙";

            }

        });

    }

});