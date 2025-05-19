document.addEventListener("DOMContentLoaded", function () {
  const cancelBtn = document.querySelector(".cancel-button");
  cancelBtn.addEventListener("click", () => {
    history.back(); // Volta para a página anterior
  });
});
