import styles from "./StockStatus.module.css";

export default function StockStatus({ stock } : {stock : number}) {
    let statusColor = '';
    let statusText = '';

    if (stock > 3) {
        statusColor = styles.green;
        statusText = `${stock} in stock`;
    } else if (stock >= 1 && stock <= 3) {
        statusColor = styles.yellow;
        statusText = `${stock} in stock`;
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