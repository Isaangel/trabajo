document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    { name: "gato", img: "img/gato.jpg" },
    { name: "elefante", img: "img/if.jpg" },
    { name: "conejo", img: "img/ih.jpg" },
    { name: "leon", img: "img/ik.png" },
    { name: "vaca", img: "img/il.png" },
    { name: "jirafa", img: "img/images.jpg" },
    { name: "gato", img: "img/gato.jpg" },
    { name: "elefante", img: "img/if.jpg" },
    { name: "conejo", img: "img/ih.jpg" },
    { name: "leon", img: "img/ik.png" },
    { name: "vaca", img: "img/il.png" },
    { name: "jirafa", img: "img/images.jpg" }
  ];
  //-----------------------------lecture02------------------------------//
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];
  //-------------------------------lecture03----------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "img/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
  //--------------------------lecture04------------------------------------//
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.lenght === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
