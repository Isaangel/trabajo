document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "gato",
      img: "img/gato.jpg"
    },

    { name: "elefante", img: "img/if.jpg" },

    { name: "conejo", img: "img/ih.jpg" },

    { name: "leon", img: "img/ik.png" },

    { name: "vaca", img: "img/il.png" },

    { name: "jirafa", img: "img/imagenes.jpg" },

    { name: "gato", img: "img/gato.jpg" },

    { name: "elefante", img: "img/if.jpg" },

    { name: "conejo", img: "img/ih.jpg" },

    { name: "leon", img: "img/ik.png" },

    { name: "vaca", img: "img/il.png" },

    { name: "jirafa", img: "img/imagenes.jpg" }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
});
