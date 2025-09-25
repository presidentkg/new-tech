import Form from "next/form";
import { addProduct } from "@/app/actions/products";
import Button from "../Button/Button";
import React from "react";
import styles from "./AddProductForm.module.css";

const formFields = {
  id: "number",
  title: "text",
  description: "text",
  price: "number",
  brand: "text",
  category: "text",
};

const fieldNames = Object.keys(formFields);

type AddProductFormProps = {
  onCancel: () => void;
};

export default function AddProductForm({ onCancel }: AddProductFormProps) {
  return (
    <section className={styles.container}>
      <h3>Add new product</h3>
      <Form action={addProduct} className={styles.form}>
        {fieldNames.map((fieldName) => {
          const fieldType = formFields[fieldName as keyof typeof formFields];

          return (
            <div className={styles.field} key={fieldName}>
              <label htmlFor={fieldName} className={styles.label}>
                {fieldName}:
              </label>
              {fieldName === "description" && (
                <textarea
                  className={styles.input}
                  name={fieldName}
                  id={fieldName}
                  required
                ></textarea>
              )}
              {fieldName === "category" && (
                <select
                  className={styles.input}
                  name={fieldName}
                  id={fieldName}
                  required
                >
                  <option value="" disabled selected>
                    Select category
                  </option>
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                </select>
              )}
              {fieldName !== "description" && fieldName !== "category" && (
                <input
                  className={styles.input}
                  name={fieldName}
                  id={fieldName}
                  type={fieldType}
                  required
                  step={fieldType === "number" ? "any" : undefined}
                />
              )}
            </div>
          );
        })}
        <div className={styles.buttons}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="submit">Add</Button>
        </div>
      </Form>
    </section>
  );
}
