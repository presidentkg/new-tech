import { notFound } from "next/navigation";

export async function getProductsByCategory(category: string) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  if (!response.ok)
    return notFound();
  const data = await response.json();
  return data.products;
}

export async function getFeaturedProducts() {
  const [smartphones, tablets, laptops] = await Promise.all([
    getProductsByCategory("smartphones"),
    getProductsByCategory("tablets"),
    getProductsByCategory("laptops"),
  ]);

  const featuredProducts = [
    ...smartphones.slice(0, 5),
    ...tablets.slice(0, 5),
    ...laptops.slice(0, 5),
  ];

  return featuredProducts;
}