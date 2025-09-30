import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  type,
  className,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`${styles.primary} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
