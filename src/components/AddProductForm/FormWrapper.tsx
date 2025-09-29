"use client";
import AddProductForm from "@/components/AddProductForm/AddProductForm";
import Button from "@/components/Button/Button";
import { useState } from "react";
import styles from "./FormWrapper.module.css";

export default function FormWrapper() {
  const [isVisible, setIsVisible] = useState(false);

  const buttonClass = `${isVisible ? styles.hidden : ""}`;

  function handleClick() {
    setIsVisible(!isVisible);
  }

  function onCancel() {
    setIsVisible(false);
  }

  return (
    <div className={styles.wrapper}>
      <Button className={buttonClass} onClick={handleClick}>
        Add new product
      </Button>
      {isVisible && <AddProductForm onCancel={onCancel} />}
    </div>
  );
}
