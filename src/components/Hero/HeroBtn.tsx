"use client";

import { useRouter } from 'next/navigation';
import styles from './hero.module.css'
import { dir } from 'console';

export default function HeroBtn({btnText, directions} : {btnText: string, directions: string}) {
    const { push } = useRouter();

    const handleHeroBtnClick = () => {
        push(`/${directions}`);
    }

    return (
        <button
            className={styles.heroBtn}
            onClick={handleHeroBtnClick}
        >
            {btnText}
        </button>
    )
}