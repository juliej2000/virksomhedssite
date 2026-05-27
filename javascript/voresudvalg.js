const sortButtons = document.querySelectorAll(".sort-btn");
const productsContainer = document.getElementById("products");

function sortProducts(type) {
  const products = Array.from(productsContainer.querySelectorAll(".product"));

  if (type === "low-high") {
    products.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (type === "high-low") {
    products.sort((a, b) => b.dataset.price - a.dataset.price);
  } else if (type === "name") {
    products.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
  }

  products.forEach((product) => productsContainer.appendChild(product));
}

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sortProducts(button.dataset.sort);
  });
});
