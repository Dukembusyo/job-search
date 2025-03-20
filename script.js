// Replace with your Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzapVEl6WjwsO3SoO1HW4Xhp8UKl7vOe7qIllOfzzd9zolh2gApOjVFtPflQv1hxiULBA/exec"; // Replace with your actual URL

// Employer Form Submission
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

// Job Seeker Form Submission
document.getElementById("seekerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let resumeFile = document.getElementById("seekerResume").files[0];
    if (!resumeFile || resumeFile.type !== "application/pdf") {
        alert("❌ Please upload a valid PDF resume.");
        return;
    }

    let formData = new FormData();
    formData.append("seekerName", document.getElementById("seekerName").value);
    formData.append("seekerEmail", document.getElementById("seekerEmail").value);
    formData.append("seekerPhone", document.getElementById("seekerPhone").value);
    formData.append("resume", resumeFile); // Upload Resume

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
});







// Smooth Scrolling Parallax Effect
document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;

    document.querySelectorAll(".parallax-section").forEach((section, index) => {
        let speed = (index + 1) * 0.3; // Adjust speed for each section
        section.style.backgroundPositionY = `${scrollPosition * speed}px`;
    });
});


