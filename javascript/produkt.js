// ARRAY MED BILLEDER
const images = ["images/img_index/img_voresudvalg/blaa_buket.webp", "images/img_index/img_voresudvalg/blaabuket_giv.webp", "images/img_index/img_voresudvalg/blaabuket_kvinder.webp", "images/img_index/img_voresudvalg/blaabuket_oppefra.webp"];

// FIND ELEMENTER
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-track img");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const thumbnails = document.querySelectorAll(".thumbnail-row img");

// START BILLEDE
let currentImage = 0;

// FUNKTION TIL AT VISE BILLEDE
function showImage(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  thumbnails.forEach((img) => img.classList.remove("active"));
  thumbnails[index].classList.add("active");
}

// HØJRE PIL
rightArrow.addEventListener("click", () => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  showImage(currentImage);
});

// VENSTRE PIL
leftArrow.addEventListener("click", () => {
  currentImage--;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  showImage(currentImage);
});

// KLIK PÅ THUMBNAILS
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentImage = index;
    showImage(currentImage);
  });
});

// VIS FØRSTE ACTIVE
showImage(currentImage);

const sizeButtons = document.querySelectorAll(".size-buttons button");
const price = document.querySelector(".product-price");

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Fjern active fra alle
    sizeButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Tilføj active til den klikkede
    button.classList.add("active");

    const newPrice = button.dataset.price;
    price.textContent = `${newPrice} KR.`;
  });
});

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantityNumber = document.querySelector(".quantity-number");

let quantity = 1;

// PLUS
plusBtn.addEventListener("click", () => {
  quantity++;

  quantityNumber.textContent = quantity;
});

// MINUS
minusBtn.addEventListener("click", () => {
  // Stopper ved 1
  if (quantity > 1) {
    quantity--;

    quantityNumber.textContent = quantity;
  }
});

// kurv knap

const addToCartBtn = document.querySelector(".add-to-cart");
addToCartBtn.addEventListener("click", () => {
  addToCartBtn.classList.toggle("active");
});
