"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroBtn from './HeroBtn'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Mousewheel, Keyboard]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={2500}
                effect='coverflow'
                mousewheel
                keyboard
                loop
            >
                <SwiperSlide>
                    <section className={styles.hero}>
                        <h1>Newtech - your new tech marketplace</h1>
                        <p>Welcome to NewTech - your technology expert. We offer a curated selection of the latest phones, laptops, and tablets from the world&apos;s leading brands.<br></br>
                        Whether you&apos;re looking for power for gaming, a thin and portable laptop for studying, or the newest mobile to stay connected, we have the solution for you.<br></br>
                        Discover the perfect tech for your lifestyle.</p>
                        <HeroBtn />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className={styles.hero}>
                        <h1>Newtech - your new tech marketplace</h1>
                        <p>Welcome to NewTech - your technology expert. We offer a curated selection of the latest phones, laptops, and tablets from the world&apos;s leading brands.<br></br>
                        Whether you&apos;re looking for power for gaming, a thin and portable laptop for studying, or the newest mobile to stay connected, we have the solution for you.<br></br>
                        Discover the perfect tech for your lifestyle.</p>
                        <HeroBtn />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className={styles.hero}>
                        <h1>Newtech - your new tech marketplace</h1>
                        <p>Welcome to NewTech - your technology expert. We offer a curated selection of the latest phones, laptops, and tablets from the world&apos;s leading brands.<br></br>
                        Whether you&apos;re looking for power for gaming, a thin and portable laptop for studying, or the newest mobile to stay connected, we have the solution for you.<br></br>
                        Discover the perfect tech for your lifestyle.</p>
                        <HeroBtn />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className={styles.hero}>
                        <h1>Newtech - your new tech marketplace</h1>
                        <p>Welcome to NewTech - your technology expert. We offer a curated selection of the latest phones, laptops, and tablets from the world&apos;s leading brands.<br></br>
                        Whether you&apos;re looking for power for gaming, a thin and portable laptop for studying, or the newest mobile to stay connected, we have the solution for you.<br></br>
                        Discover the perfect tech for your lifestyle.</p>
                        <HeroBtn />
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>

    )
}