const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.querySelector(".lista");
  console.log(lista);
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  for (const cosa of cosasQueAprendimos) {
    const li = document.createElement("li");
    li.textContent = cosa.tema;
    if (cosa.class) {
      li.classList.add(cosa.class);
    }
    lista.appendChild(li);
  }
}

main();
