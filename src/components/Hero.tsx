import styles from '../app/page.module.css'
import HeroBtn from './HeroBtn'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1>Newtech - your new tech marketplace</h1>
            <p>Welcome to NewTech - your technology expert. We offer a curated selection of the latest phones, laptops, and tablets from the world&apos;s leading brands.<br></br>
            Whether you&apos;re looking for power for gaming, a thin and portable laptop for studying, or the newest mobile to stay connected, we have the solution for you.<br></br>
            Discover the perfect tech for your lifestyle.</p>
            <HeroBtn />
        </section>

    )
}