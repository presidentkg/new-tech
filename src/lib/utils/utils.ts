export async function getProductsByCategory(category: string) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );

  const data = await response.json();
  return data.products;
}
