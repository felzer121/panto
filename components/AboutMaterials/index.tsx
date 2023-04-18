import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import picture1 from "@/public/image/materials_1.webp";
import picture2 from "@/public/image/materials_2.webp";
import picture3 from "@/public/image/materials_3.webp";
import { useTranslation, Trans } from "next-i18next";

const AboutMaterials = () => {
  const { t } = useTranslation("about");
  return (
    <section className={styles.materials} id="materials">
      <div className={styles.materialsContent}>
        <span className={styles.materialsSubtitle}>
          {t("materials.subtitle")}
        </span>
        <h2>{t("materials.title")}</h2>
        <p className={styles.materialsText}>{t("materials.text")}</p>
      </div>
      <div className={styles.materialsPicture}>
        <div className={styles.materialsPictureLeft}>
          <Image src={picture2} alt="" width={220} />
          <Image src={picture3} alt="" width={220} />
        </div>
        <picture className={styles.materialsPictureRight}>
          <Image src={picture1} alt="" />
        </picture>
      </div>
    </section>
  );
};

export default AboutMaterials;
