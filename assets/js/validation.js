document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const submitBtn = form.querySelector("button[type='submit']");
  const errorMsg = document.getElementById("login-error");

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!isValidEmail(email)) {
      showToast("Email inválido.", "error");
      return;
    }

    if (password.length < 6) {
      showToast("A senha deve ter pelo menos 6 caracteres.", "error");
      return;
    }

    // Tudo válido: desativa botão e simula envio
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Entrando <span class="button-spinner"></span>';

    setTimeout(() => {
      showToast("Login realizado com sucesso!", "success");
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Entrar";
      form.reset();
    }, 1000);
  });
});
