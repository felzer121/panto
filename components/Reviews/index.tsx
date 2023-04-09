import React from "react";
import styles from './style.module.scss'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper';
import 'swiper/css';

interface Testimonials {
  id: number
  pictureUser: string
  name: string
  position: string
  pictureFon: string
  rating: number
  description: string
}

interface ReviewsProps {
  testimonials: Array<Testimonials>
}

const Reviews = ({ testimonials }: ReviewsProps) => {
  const swiperRef = React.useRef<SwiperInterface>()
  const [activeSlide, setActiveSlide] = React.useState(1)

  const nextSlide = () => {
    if (activeSlide < testimonials.length - 4)
      setActiveSlide((prev) => prev + 1)

    swiperRef.current?.slideNext()
  }

  const prevSlide = () => {
    if (activeSlide > 0)
      setActiveSlide((prev) => prev - 1)

    swiperRef.current?.slidePrev()
  }
  return (
    <section className={styles.reviews} id="testimonials">
      <div className={styles.reviewsTitle}>
        <span className={styles.reviewsSubtitle}>Отзывы</span>
        <h2>Отзывы наших клиентов</h2>
      </div>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        initialSlide={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={styles.testimonialsBlock}
      >
        {testimonials.map(testimonial => (
          <SwiperSlide
            key={testimonial.id}
            style={{ background: `url(${testimonial.pictureFon}` }}
            className={styles.testimonial}
          >
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialPicture}>
                <Image src={testimonial.pictureUser} alt={testimonial.name} width={50} height={50} />
              </div>
              <div className={styles.testimonialTitle}>
                <h5 className={styles.testimonialName}>{testimonial.name}</h5>
                <span className={styles.testimonialPosition}>{testimonial.position}</span>
              </div>
              <p className={styles.testimonialDescription}>{testimonial.description}</p>
              <div className={styles.testimonialStars}>
                {Array.from({ length: Math.ceil(testimonial.rating) }, (_, k) => (
                  <div key={k} className={testimonial.rating < k + 1 ? styles.catalogRating : ''}>
                    <Image
                      className={styles.testimonialStars}
                      src="/icon/star.svg"
                      alt="search"
                      width={18}
                      height={18}
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => prevSlide()}
        className={`${styles.reviews__controllerLeft} ${activeSlide == 0 && styles.reviews__controllerRightNon}`}>
        <Image
          src="/icon/grommet-left.svg"
          className={styles.reviews__arrow}
          alt="arrow-left"
          width={26}
          height={26}
        />
      </button>
      <button
        onClick={() => nextSlide()}
        className={`${styles.reviews__controllerRight} ${activeSlide == testimonials.length - 4 && styles.reviews__controllerRightNon}`}>
        <Image
          src="/icon/grommet-right.svg"
          className={styles.reviews__arrow}
          alt="arrow-right"
          width={26}
          height={26}
        />
      </button>
    </section>
  )
}

export default Reviews
