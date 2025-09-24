import { UpdateAction } from "@/app/actions/products";
import { Product } from "@/lib/utils/interface";
import Form from "next/form"
import Link from "next/link";
import styles from "./UpdateForm.module.css";


export default function UpdateForm({product} : {product : Product}){
    return(
        <Form action={UpdateAction} className={styles.updateForm}>
            <h3>Uppdatera <span className={styles.title}>{product.title}</span></h3>
            <div className={styles.inputGroup}>
                <label htmlFor="title">New title: </label>
                <input 
                    type="text" 
                    name="title"
                    id="title"
                    defaultValue={product.title}
                    minLength={3}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="price">New price: </label>
                <input 
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={product.price}
                />
            </div>
            <div className={styles.buttons}>
                <button type="submit" className={styles.button}>Spara</button>
                <Link
                    className={`${styles.button} ${styles.cancel}`}
                    href="/admin"
                >
                    Cancel
                </Link>
            </div>
        </Form>
    )
}