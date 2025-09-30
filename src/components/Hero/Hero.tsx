"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroBtn from "./HeroBtn";
import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectCoverflow,
          Mousewheel,
          Keyboard,
        ]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={2500}
        effect="coverflow"
        mousewheel
        keyboard
        loop
      >
        <SwiperSlide>
          <section className={styles.hero}>
            <div className={styles.image}>
              <Image
                src="/images/laptop.webp"
                alt="Open laptop on display for weekly deal promotion"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.center}>
              <h1>Deal of the Week</h1>
              <HeroBtn btnText="See all deals" directions="products" />
            </div>
            <div className={styles.circle}>
              <span>Up to</span>
              <span>50% OFF</span>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.hero}>
            <div className={styles.images}>
              <div className={styles.image}>
                <Image
                  src="/images/phone.webp"
                  alt="Modern smartphone on promotion"
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.image}>
                <Image
                  src="/images/phone2.webp"
                  alt="Latest smartphone model on sale"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className={styles.center}>
              <h1>Discover your new phone</h1>
              <HeroBtn
                btnText="See all phones"
                directions="products?category=smartphones"
              />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.hero}>
            <div className={styles.image}>
              <Image
                src="/images/tablet.webp"
                alt="Tablet available in weekly offers"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.center}>
              <h2>Looking for a new tablet?</h2>
              <HeroBtn
                btnText="See all tablets"
                directions="products?category=tablets"
              />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
