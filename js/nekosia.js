document.addEventListener("DOMContentLoaded", function() {
    setBackgroundImage();
    loadMultipleImages();
    
  });
  
  function loadMultipleImages() {
    const url = 'https://api.nekosia.cat/api/v1/images/catgirl';
    const numberOfImages = 20; // Número de imágenes que deseas cargar
    const imageContainer = document.getElementById("waifu-cards");
    imageContainer.innerHTML = ""; // Limpia los resultados anteriores
  
    for (let i = 0; i < numberOfImages; i++) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.success && data.image && data.image.original.url) {
            const imageUrl = data.image.original.url;
            const card = document.createElement("div");
            card.className = "cardapi";
            card.innerHTML = `<img src="${imageUrl}" alt="Catgirl Image" class="img-fluid">`;
            imageContainer.appendChild(card);
          } else {
            document.getElementById("error").textContent = "No se encontraron imágenes.";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          document.getElementById("error").textContent = "Ocurrió un error al obtener las imágenes.";
        });
    }
  }
  
  function setBackgroundImage() {
    const url = 'https://api.nekosia.cat/api/v1/images/catgirl';
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.image && data.image.original.url) {
          const imageUrl = data.image.original.url;
          document.body.style.backgroundImage = `url(${imageUrl})`;
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
        } else {
          console.error("No se encontró la imagen.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  