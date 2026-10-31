let menuASIDE = `
  <section class="sidebar-logo">
        <a href="../index.html" aria-label="Voltar para a página inicial">
          <img  src="../../logos/BP_Anual.png" alt="Logo BP" />
        </a>
      </section>

      <!-- Menu principal -->
      <nav class="sidebar-menu">
      
        <ul>
          <li class="manuais_s_a"><a href="../../../../index.html">Manuais Assistencia Segura</a></li>
          <li><a href="./visaoGeral.html">Visão Geral do Produto</a></li>
          <li>
            <a href="./servicos.html">Serviços da Assistência 24 horas</a>
          </li>
          <li>
            <a href="./exclusoes.html"
              >Exclusões Gerais da Assistência 24 horas</a
            >
          </li>
          <li>
            <a href="./disposicoes.html"
              >Disposições Gerais da Assistência 24 horas</a
            >
          </li>
          <li><a href="./carro-reserva.html">Carro Reserva</a></li>
          <li><a href="./opcionais.html">Opcionais</a></li>
          <li><a href="./roteiro.html">Roteiro Rápido de Atendimento</a></li>
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
            <h2>0800 042 1022</h2>
            <p>Sinistro / Reembolso</p>
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
