const caminhoBase = window.location.hostname === "viniciusmendeslima.github.io"
  ? "/Manual_Atendimento/"
  : "../../../../";

let menuASIDE = `
  <section class="sidebar-logo">
        <a href="../index.html" aria-label="Voltar para a página inicial">
          <img  src="../../logos/logo_igreen_seguros_final.png" alt="Logo BP" />
        </a>
      </section>

      <!-- Menu principal -->
      <nav class="sidebar-menu">
      
        <ul>
          <li class="manuais_s_a"><a href="${caminhoBase}index.html">Manuais Assistencia Segura</a></li>
          <li>
            <a href="./servicos.html">Serviços da Assistência 24 horas</a>
          </li>
          <li>
            <a href="./exclusoes.html"
              >Exclusões Gerais da Assistência 24 horas</a
            >
          </li>
          <li><a href="./contatos.html">Contatos Úteis</a></li>
        </ul>
      </nav>

      <!-- Telefones e contatos -->
      <footer class="sidebar-contact">
        <h2>Central de Atendimento</h2>

        <address class="contact-item">
          <i aria-hidden="true">📞</i>

          <div>
            <h2>0800 000 4379</h2>
            <p>Ouvidoria</p>
          </div>
        </address>

        <address class="contact-item">
          <i aria-hidden="true">📞</i>

          <div>
            <h2>(31) 3972-5000</h2>
            <p>Central / Sinistro</p>
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
