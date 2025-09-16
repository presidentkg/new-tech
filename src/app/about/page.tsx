import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <section>
        <section className={styles['bg-image']}>
          <div className={styles['bg-inner']}>
            <h1 className={styles['h1-heading']}>About</h1>
          </div>
        </section>
        <section className={styles['inner-container']}>
          <div className={styles['text-container']}>
            <p className={styles.paragraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque, vero dolorem numquam quos iure iste impedit velit porro dignissimos eaque reprehenderit aliquid voluptatem, quisquam amet, iusto voluptate molestiae quibusdam?
            </p>
            <h2 className={styles['h2-heading']}>Our Team</h2>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque asperiores nam maiores dolore quam assumenda ad labore. Unde fugiat alias, in, nemo dolore, quae tenetur necessitatibus libero quaerat ipsum voluptatum.
            </p>
            <button className={styles.button}>Read More</button>
          </div>
          <div className={styles.images}>
            <Image className={styles.image} src="/woman.png" alt="Business woman" width={640} height={960} />
            <Image className={styles.image} src="/man-1.png" alt="Business man" width={640} height={960} />
            <Image className={styles.image} src="/man-2.png" alt="Business man" width={640} height={960} />
            <Image className={styles.image} src="/man-3.png" alt="Business man" width={640} height={960} />
          </div>
        </section>
    </section>
  );
}
