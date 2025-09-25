import Image from "next/image";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <section className={styles["contact-container"]}>
      <div className={styles["form-container"]}>
        <h1 className={styles["h1-heading"]}>Contact</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <form className={styles.form}>
          <div className={styles["form-field"]}>
            <label htmlFor="email">Email</label>
            <input
              className={styles["form-input"]}
              type="email"
              name="email"
              id="email"
              placeholder="you@domain.com"
              required
            />
          </div>
          <div className={styles["form-field"]}>
            <label htmlFor="subject">Subject</label>
            <input
              className={styles["form-input"]}
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
            />
          </div>
          <div className={styles["form-field"]}>
            <label htmlFor="message">Message</label>
            <textarea
              className={styles["form-textarea"]}
              name="message"
              id="message"
              rows={6}
              placeholder="Leave us a message..."
              required
            />
          </div>
          <div className={styles["form-field"]}>
            <label htmlFor="contact-type">Contact type</label>
            <select
              className={styles["form-input"]}
              name="contact-type"
              id="contact-type"
              required
            >
              <option value="" disabled selected>
                Select contact type
              </option>
              <option value="support">Support</option>
              <option value="info">Info</option>
              <option value="complaint">Complaint</option>
              <option value="sales">Sales</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            className={styles.button}
            type="submit"
            aria-label="Send your message"
          >
            Send message
          </button>
        </form>
      </div>
      <Image
        className={styles.image}
        src="/tablet.jpg"
        alt="Tablet device illustration for the contact page"
        width={1280}
        height={1707}
      />
    </section>
  );
}
