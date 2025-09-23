"use client";

import { Product } from "@/lib/utils/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import styles from "./ProductSwiper.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductSwiper({ products }: { products: Product[] }) {
  return (
    <section className={styles.swiper}>
      <Swiper
        modules={[Scrollbar, Mousewheel]}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          820: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        mousewheel
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className={styles.cardWrapper}>
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
