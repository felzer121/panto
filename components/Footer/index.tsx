import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import facebook from "@/public/icon/facebook.svg";
import twitter from "@/public/icon/twitter.svg";
import instagram from "@/public/icon/instagram.svg";
import { useTranslation, Trans } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.footerContent}>
        <div className={styles.footerAbout}>
          <a className={styles.footerLogo}>Panto</a>
          <p className={styles.footerTxt}>{t("about")}</p>
        </div>
        <div className={styles.footerServices}>
          <h5 className={styles.footerTitle}>{t("services.title")}</h5>
          <ul className={styles.footerList}>
            <li>{t("services.link.advertising")}</li>
            <li>{t("services.link.campaigns")}</li>
            <li>{t("services.link.branding")}</li>
          </ul>
        </div>
        <div className={styles.footerFurniture}>
          <h5 className={styles.footerTitle}>{t("furniture.title")}</h5>
          <ul className={styles.footerList}>
            <li>{t("furniture.link.bed")}</li>
            <li>{t("furniture.link.chair")}</li>
            <li>{t("furniture.link.all")}</li>
          </ul>
        </div>
        <div className={styles.footerContacts}>
          <h5 className={styles.footerTitle}>{t("contacts.title")}</h5>
          <ul className={styles.footerList}>
            <li>
              <Image src={facebook} alt="" />
              {t("contacts.link.facebook")}
            </li>
            <li>
              <Image src={twitter} alt="" />
              {t("contacts.link.twitter")}
            </li>
            <li>
              <Image src={instagram} alt="" />
              {t("contacts.link.instagram")}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        <span className={styles.footerCopyRightText}>Copyright © 2021</span>
        <div className={styles.footerCopyRightLink}>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
