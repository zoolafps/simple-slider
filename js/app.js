window.addEventListener('load', () =>{
  const btn = document.querySelector(".next");
  const btntwo = document.querySelector(".prev");
  const titulo = document.querySelector("#titulo");
  const texto = document.querySelector("#texto");

  let titulos = [
    "titulo1",
    "titulo2",
    "titulo3",
    "titulo4",
    "titulo5"
  ]
  let textos =
  [
  "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget rhoncus ex. Nullam semper nec tellus id commodo. Maecenas erat arcu, vestibulum eget vulputate et, maximus at tortor. Nullam dapibus velit ut lacinia pharetra. Nam efficitur metus luctus semper mollis. Ut id tortor eget risus placerat feugiat et ut enim. Prpis id urna commodo fringillaus convallis sem pellentesque.",
  "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget rhoncus ex. Nullam semper nec tellus id commodo. Maecenas erat arcu, vestibulum eget vulputate et, maximus at tortor. Nullam dapibus velit ut lacinia pharetra. Nam efficitur metus luctus semper mollis. Ut id tortor eget risus placerat feugiat et ut enim. Prpis id urna commodo fringillaus convallis sem pellentesque.",
  "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget rhoncus ex. Nullam semper nec tellus id commodo. Maecenas erat arcu, vestibulum eget vulputate et, maximus at tortor. Nullam dapibus velit ut lacinia pharetra. Nam efficitur metus luctus semper mollis. Ut id tortor eget risus placerat feugiat et ut enim. Prpis id urna commodo fringillaus convallis sem pellentesque.",
  "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget rhoncus ex. Nullam semper nec tellus id commodo. Maecenas erat arcu, vestibulum eget vulputate et, maximus at tortor. Nullam dapibus velit ut lacinia pharetra. Nam efficitur metus luctus semper mollis. Ut id tortor eget risus placerat feugiat et ut enim. Prpis id urna commodo fringillaus convallis sem pellentesque.",
  "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget rhoncus ex. Nullam semper nec tellus id commodo. Maecenas erat arcu, vestibulum eget vulputate et, maximus at tortor. Nullam dapibus velit ut lacinia pharetra. Nam efficitur metus luctus semper mollis. Ut id tortor eget risus placerat feugiat et ut enim. Prpis id urna commodo fringillaus convallis sem pellentesque.",
  ];
  let imagenes = [
    "img/imagen1.jpg",
    "img/imagen2.jpg",
    "img/imagen3.jpg",
    "img/imagen4.jpg",
    "img/imagen5.jpg",
  ];
  var i = 0;

  titulo.innerHTML = titulos[i];
  texto.innerHTML = textos[i];
  document.img.src = imagenes[i];

  btn.addEventListener("click", () => {
      if (i < 4) {
        i++;
        titulo.innerHTML = titulos[i];
        texto.innerHTML = textos[i];
        document.img.src = imagenes[i];
      } else {
        i = 0;
        titulo.innerHTML = titulos[i];
        texto.innerHTML = textos[i];
        document.img.src = imagenes[i];
      }
      console.log("sumar" + i);
    });

    btntwo.addEventListener("click", () => {
      if (i > 0) {
        i--;
        titulo.innerHTML = titulos[i];
        texto.innerHTML = textos[i];
        document.img.src = imagenes[i];
      } else {

      }
      console.log("restar" + i);
      });
});
