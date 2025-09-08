import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <section className={styles['about-container']}>
        <h1>About</h1>
        <Image className={styles.image} src="/newtech-about.jpg" alt="Group of business people" width={1280} height={853} />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae placeat atque dolores eligendi nihil hic sint numquam nam! Molestiae illum nihil eaque velit aliquid dolorem architecto alias natus fuga est.
            Adipisci fuga dignissimos sit suscipit quam magni excepturi rem placeat, explicabo illo tempore accusamus quidem sunt consequuntur non odit qui quod error repellendus eius! Corporis, modi! Est quae ea quam.
            Temporibus, eum! Labore voluptate iure molestias quos in numquam unde quam odio eveniet facilis mollitia, vel officia architecto? Architecto quae animi ab et alias dolorem mollitia, nobis cum quidem ullam.
        </p>
    </section>
  );
}
