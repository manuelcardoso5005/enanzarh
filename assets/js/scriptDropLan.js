document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".custom-language-dropdown");
  const selected = dropdown.querySelector(".selected-language");
  const options = dropdown.querySelector(".language-options");

  selected.addEventListener("click", () => {
    options.style.display =
      options.style.display === "block" ? "none" : "block";
  });

  options.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      const img = option.querySelector("img").src;
      const text = option.querySelector("span").textContent;

      selected.querySelector("img").src = img;
      selected.querySelector("span").textContent = text;
      options.style.display = "none";

      // Aqui você pode usar option.dataset.lang para alterar o idioma
      const lang = option.dataset.lang;
      console.log("Idioma selecionado:", lang);
      // ... salvar no localStorage ou chamar função de tradução
    });
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      options.style.display = "none";
    }
  });
});
