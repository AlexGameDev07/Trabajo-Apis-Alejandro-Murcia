
// Función para cargar imagen de Nekosia API
function loadNekosiaImage() {
   fetch('https://api.nekosia.cat/api/v1/images/catgirl')
      .then(response => response.json())
      .then(data => {
         if (data.success && data.image && data.image.original.url) {
            document.getElementById('NekosiaImg').src = data.image.original.url;
         }
      })
      .catch(error => console.error('Error:', error));
}

// Función para cargar imagen de Dogs API
function loadDogImage() {
   fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
         if (data.status === "success" && data.message) {
            document.getElementById('DogsImg').src = data.message;
         }
      })
      .catch(error => console.error('Error:', error));
}

// Función para cargar imagen de Waifu API
function loadWaifuImage() {
   fetch('https://api.waifu.pics/sfw/dance')
      .then(response => response.json())
      .then(data => {
         if (data.url) {
            document.getElementById('WaifuImg').src = data.url;
         }
      })
      .catch(error => console.error('Error:', error));
}

// Cargar todas las imágenes cuando se carga la página
document.addEventListener('DOMContentLoaded', function () {
   loadNekosiaImage();
   loadDogImage();
   loadWaifuImage();
});
