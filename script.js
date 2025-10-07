document.addEventListener("DOMContentLoaded", () => {
    // Agent Details Modal
    const viewDetailButtons = document.querySelectorAll(".view-details-btn");
    const agentDetailSection = document.getElementById("agent-detail");
    const closeDetailButton = document.getElementById("close-detail");
    const agentName = document.getElementById("agent-name");
    const agentRole = document.getElementById("agent-role");
    const agentDesc = document.getElementById("agent-desc");

    // Open agent details
    if (viewDetailButtons.length > 0) {
        viewDetailButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const card = event.target.closest(".agent-card");
                agentName.textContent = card.dataset.name;
                agentRole.textContent = `Role: ${card.dataset.role}`;
                agentDesc.textContent = card.dataset.desc;
                agentDetailSection.classList.add("active");
            });
        });

        // Close modal
        closeDetailButton.addEventListener("click", () => {
            agentDetailSection.classList.remove("active");
        });
    }

    // Maps
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", (event) => {
            const mainImageId = event.target.getAttribute("data-target"); 
            const newSrc = event.target.getAttribute("data-src"); 
            const mainImage = document.getElementById(mainImageId);

            if (mainImage) {
                mainImage.src = newSrc;

                const thumbnailContainer = event.target.closest(".map-card");
                const allThumbnails = thumbnailContainer.querySelectorAll(".thumbnail");
                allThumbnails.forEach((thumb) => thumb.classList.remove("active"));

                event.target.classList.add("active");
            }
        });
    });

    // Bug Report Validation
    const form = document.getElementById("bug-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            let isValid = true;

            const username = document.getElementById("username");
            const email = document.getElementById("email");
            const server = document.getElementById("server");
            const description = document.getElementById("description");

            if (username.value.trim().length < 3) {
                alert("Username must be at least 3 characters long.");
                isValid = false;
            }

            if (!email.value.includes("@") || !email.value.includes(".")) {
                alert("Please enter a valid email address.");
                isValid = false;
            }

            if (server.value.trim().length === 0) {
                alert("Server name cannot be empty.");
                isValid = false;
            }

            if (description.value.trim().length < 10) {
                alert("Bug description must be at least 10 characters long.");
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            } else {
                alert("Bug report submitted successfully!");
                form.reset(); 
            }
        });
    }
});
