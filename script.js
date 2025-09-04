document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop actual form submission/refresh
    
    // Show success message
    successMsg.textContent = "✅ Form submitted successfully!";
    successMsg.style.display = "block";

    // Reset the form after showing message
    form.reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
});
