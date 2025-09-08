import styles from "./page.module.css";

export default function Contact() {
  return (
    <section className={styles['contact-container']}>
        <h1>Contact</h1>
        <form className={styles.form}>
            <div className={styles['form-field']}>
                <label htmlFor="email">Email</label>
                <input className={styles['form-input']} type="email" name="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className={styles['form-field']}>
                <label htmlFor="message">Message</label>
                <textarea className={styles['form-textarea']} name="message" id="message" placeholder="Enter your message" required />
            </div>
            <button className={styles.button} type="submit">Send</button>
        </form>
    </section>
  );
}
