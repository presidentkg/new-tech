import { ProductList } from "@/components/ProductList/ProductList";
import FormWrapper from "@/components/AddProductForm/FormWrapper";
import styles from "./AdminPage.module.css";
import { getFeaturedProducts } from "@/lib/utils/utils";

export default async function AdminPage() {
  const products = await getFeaturedProducts();

  return (
    <div className={styles.page}>
      <FormWrapper />
      <h1 className={styles.heading}>Admin Panel: Products</h1>
      {products.length > 0 ? (
        <ProductList products={products} isAdminPage={true} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
