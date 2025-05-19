document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector(".toggle-password");
  const passwordInput = document.getElementById("password");

  togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.src = isPassword
      ? "assets/images/icons/eye-off.svg"
      : "assets/images/icons/eye.svg";
  });
});
