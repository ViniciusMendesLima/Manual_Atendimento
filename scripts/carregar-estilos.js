const estilos = [
  "../../styles/grid.css",
  "../../styles/reset.css",
  "../../stylesPage/sideBarMenu.css",
  "../../stylesPage/contentSection.css",
  "../../stylesPage/variables.css",
  "../../stylesPage/detail.css",
  "../../stylesPage/mediaQueries.css"
];

estilos.forEach((caminho) => {
  const link = document.createElement("link");

  link.rel = "stylesheet";
  link.href = caminho;

  document.head.appendChild(link);
});