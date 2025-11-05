// Modal (fondo negro)
const modal = document.getElementById("modal");

// Imagen grande que se mostrará
const imgGrande = document.getElementById("imgGrande");

// Todas las imágenes pequeñas
const imagenes = document.querySelectorAll(".columna img");

// Botón cerrar
const cerrar = document.getElementsByClassName("cerrar")[0];

// Al hacer clic en cualquier imagen
imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex"; // usa flex para centrar bien
    imgGrande.src = img.src;
  });
});

// Cerrar modal
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar si se hace clic fuera de la imagen
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

