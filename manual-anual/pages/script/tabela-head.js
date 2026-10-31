const TABELAS = {
    ".tabela-reembolso": [
        "Produto", "Plano","Limite Km", "Reemb. Evento", "Reemb. Vigência"
    ],
    ".tabela-reembolso-2": [
        "Produto", "Plano", "Reemb. Evento", "Reemb. Vigência"
    ],
    ".tabela-reembolso-3": [
        "Produto", "Plano","Diaria/Pessoa", "Reemb. Evento", "Reemb. Vigência"
    ],
    ".tabela-reembolso-4": [
        "Produto", "Plano","Situação", "Reemb. Evento", "Reemb. Vigência"
    ],
    ".tabela-reembolso-5": [
        "Produto", "Plano","Serviço","Limite Km", "Reemb. Evento", "Reemb. Vigência"
    ],
};

function criarThead(colunas) {
    const thead = document.createElement("thead");
    thead.className = "head-table";

    thead.innerHTML = `
        <tr>
            ${colunas.map(c => `<th>${c}</th>`).join("")}
        </tr>
    `;

    return thead;
}

function inicializarTabelas() {
    Object.entries(TABELAS).forEach(([seletor, colunas]) => {
        document.querySelectorAll(seletor).forEach(tabela => {
            if (!tabela.querySelector("thead")) {
                tabela.prepend(criarThead(colunas));
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", inicializarTabelas);