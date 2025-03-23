document.addEventListener("DOMContentLoaded", () => {
  const imagens1 = [
    "/niver-jemelli/jemelli1.png",
    "/niver-jemelli/jemelli2.png",
    "/niver-jemelli/jemelli3.png",
    "/niver-jemelli/jemelli4.png",
    "/niver-jemelli/jemelli5.png",
    "/niver-jemelli/jemelli6.png",
    "/niver-jemelli/jemelli7.png",
  ];

  let index1 = 0;

  function trocarImagem() {
    const imgPolaroid1 = document.getElementById("img-polaroid1");

    if (imgPolaroid1) {
      imgPolaroid1.classList.add("fade-out");

      setTimeout(() => {
        index1 = (index1 + 1) % imagens1.length;
        imgPolaroid1.src = imagens1[index1];
        imgPolaroid1.classList.remove("fade-out");
      }, 1000);
    }
  }

  setInterval(trocarImagem, 3000);
});
