export type ProductCategoryType = "Men" | "Women" | "Youth";

export type ProductType = {
  id: string;
  title: string;
  price: number;
  category: ProductCategoryType;
};

export type CreatedProductType = Omit<ProductType, "id">;

export type InsertProductType = ProductType[];
