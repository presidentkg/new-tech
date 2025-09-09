"use client";

import { useRouter } from 'next/navigation';
import styles from '../app/page.module.css'

export default function HeroBtn() {
    const { push } = useRouter();

    const handleHeroBtnClick = () => {
        push('/products');
    }

    return (
        <button
            className={styles.heroBtn}
            onClick={handleHeroBtnClick}
        >
            Shop Now
        </button>
    )
}