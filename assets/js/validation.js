document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const submitBtn = form.querySelector("button[type='submit']");
  const errorMsg = document.getElementById("login-error");
  const login__field = document.querySelectorAll(".login__field");

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Limpa estados anteriores
    login__field.forEach((field) => field.classList.remove("error"));
    login__field.forEach((field) => field.classList.add("no_error"));

    // Validação do email
    if (!isValidEmail(email)) {
      login__field[0].classList.remove("no_error");
      login__field[0].classList.add("error");
      showToast("Email inválido.", "error");
      return;
    }

    // Validação da senha
    if (password.length < 6) {
      login__field[1].classList.remove("no_error");
      login__field[1].classList.add("error");
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

      // Limpa erros visuais
      login__field.forEach((field) => field.classList.remove("error"));
    }, 1000);
  });
});
