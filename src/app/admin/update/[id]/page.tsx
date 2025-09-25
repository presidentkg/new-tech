import UpdateForm from "@/components/UpdateForm/UpdateForm"
import { Product } from "@/lib/utils/interface"
import { notFound } from "next/navigation";

export default async function UpdateProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    try{
        const productResponse = await fetch(`https://dummyjson.com/products/${id}`);
        if (!productResponse.ok)
            throw new Error("Could not fetch product from api");
        const productData = await productResponse.json();
        const product : Product = productData;
        return <UpdateForm product={product} />;
    } catch{
        return notFound();
    }

}