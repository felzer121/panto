import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { Product } from "../Catalog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInterface, Lazy } from "swiper";
import "swiper/css";

interface ProductProps {
  products: Array<Product>;
}

const Slider = ({ products }: ProductProps) => {
  const swiperRef = React.useRef<SwiperInterface>();
  const [activeSlide, setActiveSlide] = React.useState(2);
  const nextSlide = () => {
    //if (activeSlide < products.length - 5)
    //  setActiveSlide((prev) => prev + 1)

    swiperRef.current?.slideNext();
  };

  const prevSlide = () => {
    //if (activeSlide > 0)
    //  setActiveSlide((prev) => prev - 1)

    swiperRef.current?.slidePrev();
  };

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Lazy]}
        breakpoints={{
          580: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1550: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className={styles.slider}
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <div className={styles.sliderImage}>
              <Image
                src={product.img}
                alt={product.name}
                loading="lazy"
                width={250}
                height={250}
              />
            </div>
            <div className={styles.sliderContent}>
              <span className={styles.slider__subtitle}>
                {product.category}
              </span>
              <h4 className={styles.slider__title}>{product.name}</h4>
              <div className={styles.sliderStars}>
                {Array.from({ length: Math.ceil(product.rating) }, (_, k) => (
                  <div
                    key={k}
                    className={
                      product.rating < k + 1 ? styles.catalogRating : ""
                    }
                  >
                    <Image
                      className={styles.slider__stars}
                      src="/icon/star.svg"
                      alt="search"
                      width={18}
                      height={18}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.sliderController}>
                <span className={styles.slider__price}>{product.price}</span>
                <button className={styles.slider__button}>
                  <Image
                    src="/icon/akar-icons_search.svg"
                    alt="search"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => prevSlide()}
        className={`${styles.slider__controllerLeft}`}
      >
        <Image
          src="/icon/grommet-left.svg"
          className={styles.slider__arrow}
          alt="arrow-left"
          width={26}
          height={26}
        />
      </button>
      <button
        onClick={() => nextSlide()}
        className={`${styles.slider__controllerRight}`}
      >
        <Image
          src="/icon/grommet-right.svg"
          className={styles.slider__arrow}
          alt="arrow-right"
          width={26}
          height={26}
        />
      </button>
    </div>
  );
};

export default Slider;
