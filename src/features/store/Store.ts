import { ProductType } from "../product/product.types";
import { StoreType } from "./store.types";

export class Store {
  name: string;
  products: ProductType[];

  constructor({ name }: StoreType) {
    this.name = name;
    this.products = [];
  }

  insertProduct(product: ProductType): void {
    const isProductExists = this.products.some((p) => product.id === p.id);

    if (isProductExists) {
      console.log("This product is already in your shop, try another product");
    } else {
      this.products.push(product);
    }
  }

  getAllProducts(): ProductType[] {
    return this.products;
  }

  getProductById(id: string): ProductType[] {
    const filteredProductByID = this.products.filter(
      (product) => product.id === id,
    );

    return filteredProductByID;
  }
}
