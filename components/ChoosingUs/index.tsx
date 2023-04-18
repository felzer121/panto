import React from "react";
import { useTranslation, Trans } from "next-i18next";
import styles from "./style.module.scss";

const ChoosingUs = () => {
  const { t } = useTranslation("about");
  return (
    <section className={styles.choosingUs}>
      <h2 className={styles.choosingUsTitle}>{t("title")}</h2>
      <div className={styles.choosingUsItem}>
        <h4 className={styles.choosingUsItemTitle}>{t("facilities.title")}</h4>
        <p className={styles.choosingUsItemDescription}>
          {t("facilities.text")}
        </p>
      </div>
      <div className={styles.choosingUsItem}>
        <h4 className={styles.choosingUsItemTitle}>{t("price.title")}</h4>
        <p className={styles.choosingUsItemDescription}>{t("price.text")}</p>
      </div>
      <div className={styles.choosingUsItem}>
        <h4 className={styles.choosingUsItemTitle}>{t("options.title")}</h4>
        <p className={styles.choosingUsItemDescription}>{t("options.text")}</p>
      </div>
    </section>
  );
};

export default ChoosingUs;
