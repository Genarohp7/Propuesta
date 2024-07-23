document.getElementById("generate-pdf").addEventListener("click", function () {
  const element = document.querySelector(".container");
  html2pdf().from(element).save("proyecto.pdf");
});
