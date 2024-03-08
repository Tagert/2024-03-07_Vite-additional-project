import { generateProductId } from "../../utils/id.ts";
import {
  ProductCategoryType,
  ProductType,
  CreatedProductType,
} from "./product.types.ts";

export class Product implements ProductType {
  id: string;
  title: string;
  price: number;
  category: ProductCategoryType;

  constructor({ title, price, category }: CreatedProductType) {
    this.id = generateProductId();
    this.title = title;
    this.price = price;
    this.category = category;
  }

  getProduct() {
    return {
      id: generateProductId(),
      title: this.title,
      price: this.price,
      category: this.category,
    };
  }

  getProductPrice() {
    return this.price;
  }

  setProductPrice(price: CreatedProductType["price"]) {
    if (!price) {
      return;
    }
    this.price = price;
  }
}
