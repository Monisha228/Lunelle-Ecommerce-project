var tabs = document.querySelectorAll(".tab-btn");
var products = document.querySelectorAll(".product-grid-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => {
      btn.classList.remove("active");
    });
    tab.classList.add("active");
    const category = tab.dataset.category;
    console.log(category);
    products.forEach((product) => {
      const productCategory = product.dataset.category;
      console.log(productCategory);

      if (category === "all" || category === productCategory) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });
});
