document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recover-form");
  const emailInput = document.getElementById("recover-email");

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
      showToast("Por favor, preencha o campo de email.", "error");
      emailInput.focus();
      return;
    }

    if (!isValidEmail(email)) {
      showToast("Por favor, insira um email válido.", "error");
      emailInput.focus();
      return;
    }

    // Email válido
    showToast("Email válido! Enviando pedido de recuperação...", "success");

    // Simula envio
    setTimeout(() => {
      showToast("Pedido de recuperação enviado com sucesso!", "success");
      form.reset();
    }, 1500);
  });
});
