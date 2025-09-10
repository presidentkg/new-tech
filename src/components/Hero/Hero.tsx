"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroBtn from './HeroBtn'
import Image from "next/image";
import styles from './hero.module.css'

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
                        <div className={styles.image}>
                            <Image
                                src="/images/laptop.webp"
                                alt={"laptop image"}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className={styles.center}>
                            <h1>Deal of the Week</h1>
                            <HeroBtn btnText='See all products'/>
                        </div>
                        <div className={styles.cirkel}>
                            <span>Up to</span>
                            <span>50% OFF</span>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className={styles.hero}>
                        <div className={styles.image}>
                            <Image
                                src="/images/phone.webp"
                                alt={"laptop image"}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className={styles.image}>
                            <Image
                                src="/images/phone2.webp"
                                alt={"laptop image"}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className={styles.center}>
                            <h1>Discover your new phone</h1>
                            <HeroBtn btnText='See all products'/>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className={styles.hero}>
                        <div className={styles.image}>
                            <Image
                                src="/images/tablet.webp"
                                alt={"laptop image"}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className={styles.center}>
                            <h1>Looking for a new tablet?</h1>
                            <HeroBtn btnText='See all products'/>
                        </div>
                    </section>
                </SwiperSlide>
                
            </Swiper>
        </section>

    )
}