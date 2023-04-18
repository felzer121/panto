import React from "react";
import styles from "./style.module.scss";
import { useTranslation, Trans } from "next-i18next";
import Image from "next/image";
import picture from "@/public/image/experience.webp";

const AboutExperiences = () => {
  const { t } = useTranslation("about");
  return (
    <section className={styles.experience} id="aboutUs">
      <div className={styles.experiencePicture}>
        <picture className={styles.experiencePictureImg}>
          <Image src={picture} alt="experience" />
        </picture>
        <div className={styles.experiencePictureRight}></div>
      </div>
      <div className={styles.experienceContent}>
        <span className={styles.experienceSubtitle}>
          {t("experiences.subtitle")}
        </span>
        <h2>{t("experiences.title")}</h2>
        <p className={styles.experienceText}>{t("experiences.text")}</p>
      </div>
    </section>
  );
};

export default AboutExperiences;
