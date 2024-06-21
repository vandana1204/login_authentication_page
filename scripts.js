document.addEventListener("DOMContentLoaded", function () {
  const loginFormContainer = document.getElementById("loginFormContainer");
  const registerFormContainer = document.getElementById(
    "registerFormContainer"
  );
  const loginToggle = document.getElementById("loginToggle");
  const registerToggle = document.getElementById("registerToggle");

  loginToggle.addEventListener("click", function () {
    loginFormContainer.classList.add("active");
    registerFormContainer.classList.remove("active");
  });

  registerToggle.addEventListener("click", function () {
    registerFormContainer.classList.add("active");
    loginFormContainer.classList.remove("active");
  });

  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var username = document.getElementById("loginUsername").value;
      var password = document.getElementById("loginPassword").value;
      var errorMsg = document.getElementById("loginErrorMsg");

      errorMsg.textContent = "";

      if (username === "admin" && password === "password") {
        alert("Login successful!");
      } else {
        errorMsg.textContent = "Invalid username or password.";
      }
    });

  document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var username = document.getElementById("registerUsername").value;
      var password = document.getElementById("registerPassword").value;
      var confirmPassword = document.getElementById(
        "registerConfirmPassword"
      ).value;
      var errorMsg = document.getElementById("registerErrorMsg");

      errorMsg.textContent = "";

      if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
      } else {
        alert("Registration successful!");
        // Handle the registration logic (e.g., saving the user data)
      }
    });

  // Initialize with login form active
  loginFormContainer.classList.add("active");
});
