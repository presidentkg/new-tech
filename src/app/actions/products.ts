"use server";

export type DeleteProductResult = {
  success: boolean;
  message: string;
};

export async function deleteProduct(
  productId: number
): Promise<DeleteProductResult> {
  if (!productId) throw new Error("Product ID is required");

  const response = await fetch(`https://dummyjson.com/products/${productId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return { success: false, message: "Failed to delete product." };
  }

  const data = await response.json();

  if (!data?.isDeleted) {
    return { success: false, message: "Invalid data" };
  }

  return { success: true, message: "Product deleted." };
}

export async function addProduct(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const brand = formData.get("brand") as string;
  const category = formData.get("category") as string;

  const addedProduct = {
    id: parseInt(id),
    title,
    description,
    price: parseInt(price),
    brand,
    category,
  };

  console.log(addedProduct);
}

export async function UpdateAction(
  prevState:{ message: string; },
  formData: FormData
) {
  const title = formData.get("title");
  const price = formData.get("price");
  return { message: `New title: ${title}, New Price: ${price}` };
}
