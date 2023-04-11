import React from "react";
import styles from './style.module.scss'
import Image from 'next/image'
import picture from '@/public/image/experience.jpg'

const AboutExperiences = () => {
  return (
    <section className={styles.experience} id="aboutUs">
      <div className={styles.experiencePicture}>
        <picture className={styles.experiencePictureImg}>
          <Image src={picture} alt="experience" />
        </picture>
        <div className={styles.experiencePictureRight}></div>
      </div>
      <div className={styles.experienceContent}>
        <span className={styles.experienceSubtitle}>Экспертиза</span>
        <h2>Мы предоставляем<br /> вам лучший опыт</h2>
        <p className={styles.experienceText}>Вам не нужно беспокоиться о результате, потому что все эти интерьеры сделаны людьми, которые являются профессионалами своего дела в элегантном и роскошном стиле и из материалов премиум-качества.</p>
      </div>
    </section>
  )
}

export default AboutExperiences
