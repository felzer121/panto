import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import fone from "../../public/image/main_fone.webp";
import { useTranslation, Trans } from "next-i18next";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

interface PreviewBlockProps {
  changeTo: string;
}

const PreviewBlock = ({ changeTo }: PreviewBlockProps) => {
  const { t } = useTranslation("common");

  const points = [
    {
      id: 1,
      name: `${t("pointProduct.first.name")}`,
      img: "/image/lamp.png",
      description: "lol",
      price: `${t("pointProduct.first.price")}`,
      position: { left: "13%", top: "64%" },
    },
    {
      id: 2,
      name: `${t("pointProduct.second.name")}`,
      img: "/image/sofa.png",
      price: `${t("pointProduct.second.price")}`,
      position: { left: "25%", top: "70%" },
    },
    {
      id: 3,
      name: `${t("pointProduct.third.name")}`,
      img: "/image/lamel.png",
      price: `${t("pointProduct.third.price")}`,
      position: { left: "80%", top: "50%" },
    },
  ];

  const transRef = useSpringRef();
  const transitions = useTransition(changeTo, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translateZ(-50px) rotateX(95deg)" },
    enter: { opacity: 1, transform: "translateZ(0) rotateX(0deg)" },
    leave: { display: "none", transform: "translateZ(-50px) rotateX(95deg)" },
  });

  React.useEffect(() => {
    transRef.start();
  }, [changeTo]);

  return (
    <section className={styles.section}>
      <Image
        src={fone}
        className={styles.sectionFone}
        alt="fone"
        priority={true}
      />
      <div className={styles.sectionContent}>
        {transitions((style, item) => (
          <animated.div style={style}>
            <h1 className={styles.title}>{t("h1")}</h1>
          </animated.div>
        ))}
        {transitions((style, item) => (
          <animated.div style={style}>
            <p className={styles.subtitle}>{t("subtitle")}</p>
          </animated.div>
        ))}
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
