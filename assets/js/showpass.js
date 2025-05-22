document.addEventListener("DOMContentLoaded", function () {
  const togglePasswordWrapper = document.querySelector(".toggle-password");
  const passwordInput = document.getElementById("login-password");

  const eyeShow = togglePasswordWrapper.querySelector(".eye-show");
  const eyeHide = togglePasswordWrapper.querySelector(".eye-hide");

  togglePasswordWrapper.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    // Alterna visibilidade dos ícones
    eyeShow.classList.toggle("hidden", !isPassword); // esconde o "mostrar" se já está mostrando
    eyeHide.classList.toggle("hidden", isPassword); // mostra o "esconder" se já está mostrando
  });
});
