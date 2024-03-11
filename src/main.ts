import { Product } from "./features/product/Product";
import { Store } from "./features/store/Store";
import { ProductCategoryType } from "./features/product/product.types";
import { addProductsToScreen } from "./utils/dom";

const title = document.getElementById("p-name") as HTMLInputElement;
const price = document.getElementById("p-price") as HTMLInputElement;
const category = document.getElementById("p-category") as HTMLSelectElement;

const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const logAllBtn = document.getElementById("log-all-btn") as HTMLButtonElement;

const clothingShop = new Store({ name: "TNT" });

addBtn.addEventListener("click", () => {
  const product = new Product({
    title: title.value,
    price: +price.value,
    category: category.value as ProductCategoryType,
  });

  clothingShop.insertProduct(product.getProduct());

  addProductsToScreen(clothingShop.getAllProducts());
});

logAllBtn.addEventListener("click", () => {
  const products = clothingShop.getAllProducts();
  console.log(products);
});
