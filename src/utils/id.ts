export const generateProductId = (): string => {
  let productId = "";

  for (let i = 0; i < 8; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    productId += randomDigit;
  }
  return productId.toString();
};
