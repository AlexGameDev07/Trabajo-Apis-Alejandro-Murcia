document.addEventListener("DOMContentLoaded", function() {
  loadDogImages();
  setBackgroundImage();
});

function loadDogImages() {
  const url = 'https://dog.ceo/api/breed/hound/images/random/20';
  const numberOfImages = 20; // Número de imágenes que deseas cargar
  const imageContainer = document.getElementById("waifu-cards");
  imageContainer.innerHTML = ""; // Limpia los resultados anteriores

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success" && data.message && data.message.length > 0) {
        for (let i = 0; i < numberOfImages && i < data.message.length; i++) {
          const imageUrl = data.message[i];
          const card = document.createElement("div");
          card.className = "cardapi";
          card.innerHTML = `<img src="${imageUrl}" alt="Hound Dog Image" class="img-fluid">`;
          imageContainer.appendChild(card);
        }
      } else {
        document.getElementById("error").textContent = "No se encontraron imágenes.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("error").textContent = "Ocurrió un error al obtener las imágenes.";
    });
}

function setBackgroundImage() {
  const url = 'https://dog.ceo/api/breed/hound/images/random/1 ';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success" && data.message && data.message.length > 0) {
        const imageUrl = data.message[0];
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
      } else {
        console.error("No se encontró la imagen de fondo.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
