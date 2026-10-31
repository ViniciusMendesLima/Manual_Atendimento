const botaoMenu = document.querySelector(".menu-toggle");
const menuLateral = document.querySelector("#menu_aside");

botaoMenu.addEventListener("click", () => {
    const menuAberto = menuLateral.classList.toggle("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = menuAberto ? "✕" : "☰";
});