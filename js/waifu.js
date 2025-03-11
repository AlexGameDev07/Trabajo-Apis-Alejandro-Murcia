function getWaifus() {
  let type = "sfw";
  let category = "dance";
  const url = `https://api.waifu.pics/many/${type}/${category}`;

  const requestData = { exclude: [] };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.files && data.files.length > 0) {
        const cardsContainer = document.getElementById("waifu-cards");
        cardsContainer.innerHTML = ""; 
        data.files.forEach((imageUrl) => {
          const card = document.createElement("div");
          card.className = "cardapi";
          card.innerHTML = `
              <img class="image-crop" src="${imageUrl}" alt="${category} image">
            `;
          cardsContainer.appendChild(card);
        });
      } else {
        document.getElementById("error").textContent =
          "No se encontraron imágenes.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("error").textContent =
        "Ocurrió un error al obtener las imágenes.";
    });
}

document.addEventListener("DOMContentLoaded", function() {
  getWaifus();
});
function getBackgroundImage() {
  const url = `https://api.waifu.pics/sfw/hug`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.url) {
        document.body.style.backgroundImage = `url(${data.url})`;
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

document.addEventListener("DOMContentLoaded", function() {
  getBackgroundImage();
});