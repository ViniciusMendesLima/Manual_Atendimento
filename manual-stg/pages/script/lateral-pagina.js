const caminhoBase = window.location.hostname === "viniciusmendeslima.github.io"
  ? "/Manual_Atendimento/"
  : "../../../../";

let menuASIDE = `
  <section class="sidebar-logo">
        <a href="../index.html" aria-label="Voltar para a página inicial">
          <img  src="../../logos/BP_Anual.png" alt="Logo BP" />
        </a>
      </section>

      <!-- Menu principal -->
      <nav class="sidebar-menu">
      
        <ul>
          <li class="manuais_s_a"><a href="${caminhoBase}index.html">Manuais Assistencia Segura</a></li>
          <li><a href="./condicoesAtendimento.html">Condições para o 
          Atendimento</a></li>
          <li>
            <a href="./servicos.html">Serviços da Assistência 24 horas</a>
          </li>
          <li>
            <a href="./exclusoes.html"
              >Exclusões Gerais da Assistência 24 horas</a
            >
          </li>
        </ul>
      </nav>

      <!-- Telefones e contatos -->
      <footer class="sidebar-contact">
        <h2>Central de Atendimento</h2>

        <address class="contact-item">
          <i aria-hidden="true">📞</i>

          <div>
            <h2>31 3010-1080</h2>
            <p>Central de Atendimento Assistência 24h</p>
          </div>
        </address>

        <address class="contact-item">
          <i aria-hidden="true">📞</i>

          <div>
            <h2>31 3972-5140</h2>
            <p>Central Matriz</p>
          </div>
        </address>
      </footer>
`;
document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu_aside");
  if (menuContainer) {
    menuContainer.innerHTML = menuASIDE;
  }
});
