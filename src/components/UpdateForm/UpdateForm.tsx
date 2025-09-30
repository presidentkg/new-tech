"use client"

import { UpdateAction } from "@/app/actions/products";
import { Product } from "@/lib/utils/interface";
import Form from "next/form"
import styles from "./UpdateForm.module.css";
import { useActionState } from "react";
import React from "react";
import { useRouter } from "next/navigation";


export default function UpdateForm({product} : {product : Product}){
    const [state, formAction, isPending] = useActionState(UpdateAction, {message: ""})
    const router = useRouter();

    React.useEffect(() => {
        if (state.message){
            alert(`Old title: ${product.title}, Old price: ${product.price}\n${state.message}`);
            router.push("/admin");
        }
    }, [state.message, product.title, product.price, router]);
  
    return(
        <Form action={formAction} className={styles.updateForm}>
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
                    min={0}
                    step={0.01}
                />
            </div>
            <div className={styles.buttons}>
                <button 
                    type="submit"
                    className={styles.button}
                    disabled={isPending}
                >
                    {isPending ? "Updating..." : "Update"}
                </button>
                <button
                    className={`${styles.button} ${styles.cancel}`}
                    onClick={() => router.push("/admin")}
                    disabled={isPending}
                >
                    Cancel
                </button>
            </div>
        </Form>
    )
}