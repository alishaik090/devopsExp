document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  // Hide the form
  document.getElementById("registrationForm").style.display = "none";

  // Show success message
  document.getElementById("successMessage").classList.remove("hidden");
});
