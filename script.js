// Replace with your Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbyyAwdIVWNoOXbuw9fbxJUJDDT9GdnU4BRDakOlmoKJF0GUEaHPyHAKH4AsFGBb75Su/exec";

// Handle Employer Form Submission
document.getElementById("opportunityForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("company", document.getElementById("company").value);
    formData.append("opportunityType", document.getElementById("opportunityType").value);
    formData.append("description", document.getElementById("description").value);
    formData.append("email", document.getElementById("email").value);

    fetch(scriptURL, {
        method: "POST",
        body: formData
    }).then(response => response.text())
    .then(data => {
        alert("✅ Opportunity submitted successfully!");
        document.getElementById("opportunityForm").reset();
    }).catch(error => {
        alert("❌ Submission failed. Please try again.");
    });
});

// Handle Job Seeker Form Submission
document.getElementById("seekerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let fileInput = document.getElementById("seekerResume").files[0];

    if (!fileInput || fileInput.type !== "application/pdf") {
        alert("❌ Please upload a valid PDF resume.");
        return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(fileInput);
    reader.onloadend = function () {
        let base64String = reader.result.split(",")[1];

        let formData = new FormData();
        formData.append("seekerName", document.getElementById("seekerName").value);
        formData.append("seekerEmail", document.getElementById("seekerEmail").value);
        formData.append("seekerPhone", document.getElementById("seekerPhone").value);
        formData.append("resume", base64String);
        formData.append("mimeType", fileInput.type);
        formData.append("fileName", fileInput.name);

        fetch(scriptURL, {
            method: "POST",
            body: formData
        }).then(response => response.text())
        .then(data => {
            alert("🎉 Application submitted successfully!");
            document.getElementById("seekerForm").reset();
        }).catch(error => {
            alert("❌ Submission failed. Please try again.");
        });
    };
});






// Smooth Scrolling Parallax Effect
document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;

    document.querySelectorAll(".parallax-section").forEach((section, index) => {
        let speed = (index + 1) * 0.3; // Adjust speed for each section
        section.style.backgroundPositionY = `${scrollPosition * speed}px`;
    });
});


