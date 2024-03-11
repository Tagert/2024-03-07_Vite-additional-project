import { ProductType } from "../features/product/product.types";

const productWrapper = document.querySelector(
  ".products-wrapper",
) as HTMLDivElement;

export const addProductsToScreen = (products: ProductType[]) => {
  productWrapper.innerHTML = "";

  products.forEach((product) => {
    const wrapper = document.createElement("div") as HTMLDivElement;
    wrapper.classList.add("wrapper");

    const title = document.createElement("h1") as HTMLHeadingElement;
    const price = document.createElement("h3") as HTMLHeadingElement;
    const category = document.createElement("h4") as HTMLHeadingElement;

    title.textContent = product.title;
    price.textContent = `Price: ${product.price.toString()}€`;
    category.textContent = `Category: ${product.category}`;

    wrapper.append(title, price, category);

    productWrapper.append(wrapper);
  });
};
