import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import fone from "../../public/image/main_fone.webp";
import { useTranslation, Trans } from "next-i18next";

const points = [
  {
    id: 1,
    name: "Настольная лампа Escada",
    img: "/image/lamp.png",
    description: "lol",
    price: "6 800₽",
    position: { left: "13%", top: "64%" },
  },
  {
    id: 2,
    name: "Диван Sicilia 2-х местный",
    img: "/image/sofa.png",
    price: "44 200₽",
    position: { left: "25%", top: "70%" },
  },
  {
    id: 3,
    name: "Ламели премиум-класса для стен",
    img: "/image/lamel.png",
    price: "2 739₽",
    position: { left: "75%", top: "50%" },
  },
];

const PreviewBlock = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.section}>
      <Image src={fone} className={styles.sectionFone} alt="fone" />
      <div className={styles.sectionContent}>
        <h1 className={styles.title}>
          Преобразите свой интерьер в уютный минимализм
          {t("h1")}
        </h1>
        <p className={styles.subtitle}>
          Превратите свою комнату с Panto в более минималистскую и современную
          легко и быстро
        </p>
        {/* <button className={styles.searchButton}>
          <Image
            src="/icon/akar-icons_search.svg"
            alt="search"
            width={18}
            height={18}
            priority
          />
        </button> */}
      </div>
      {points.map((point) => (
        <div key={point.id} className={styles.point} style={point.position}>
          <div className={styles.pointMarker}>
            <div className={styles.pointInside}></div>
          </div>
          <div className={styles.pointDescription}>
            <Image src={point.img} alt="sofa" width={62} height={62} />
            <div className={styles.pointContent}>
              <h4 className={styles.pointTitle}>{point.name}</h4>
              <p>{point.price}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PreviewBlock;
