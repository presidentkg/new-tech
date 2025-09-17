import styles from "./StockStatus.module.css";

export default function StockStatus({ stock, shippingInfo } : {stock : number, shippingInfo : string}) {
    let statusColor = '';
    let statusText = '';

    if (stock > 3) {
        statusColor = styles.green;
        statusText = `${stock} in stock (${shippingInfo})`;
    } else if (stock >= 1 && stock <= 3) {
        statusColor = styles.yellow;
        statusText = `${stock} in stock (${shippingInfo})`;
    } else {
        statusColor = styles.red;
        statusText = "Out of stock!";
    }

    return (
        <div className={styles.stockStatus}>
            <span className={`${styles.circle} ${statusColor}`}></span>
            <p>{statusText}</p>
        </div>
    );
}