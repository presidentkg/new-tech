import { CartItem as CartItemType } from "@/lib/utils/interface";
import Image from "next/image";
import StockStatus from "../StockStatus/StockStatus";
import styles from "./Cart.module.css";


export default function CartItem({item, updateQuantity, removeItem} : {item : CartItemType, updateQuantity : (id : number, newQuantity: number) => void, removeItem : (id : number) => void}){
    const handleIncrement = () => {
        if (item.quantity < item.stock)
            updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrement = () => updateQuantity(item.id, item.quantity - 1);
    const handleRemove = () => removeItem(item.id);

    return(
        <section className={styles.cartGrid}>
            <div className={styles.image}>
                <Image
                  src={item.images[0]}
                  alt={"product image"}
                  width={150}
                  height={150}
                />
            </div>
            
            <section className={styles.details}>
                <h3>{item.title}</h3>
                <StockStatus stock={item.stock} shippingInfo={item.shippingInformation}/>
            </section>

            <div className={styles.quantity}>
                <p className={styles.smallerScreenOnly}>Amount: </p>
                <button className={styles.btn} onClick={handleDecrement} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button className={styles.btn} onClick={handleIncrement} disabled={item.quantity >= item.stock}>+</button>
            </div>
            <p className={styles.smallerScreenOnly}>Price: </p>
            <p>{item.price}</p>
            <p className={styles.smallerScreenOnly}>Total price: </p>
            <p>{(item.price * item.quantity).toFixed(2)}</p>
            <button className={styles.btn} onClick={handleRemove}>X</button>
        </section>
    );
}