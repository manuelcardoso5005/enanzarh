document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-theme");

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
});
