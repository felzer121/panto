import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { count } from "console";
import Slider from "@/components/Slider";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";

export interface Product {
  name: string;
  img: string;
  rating: number;
  category: string;
  price: string;
}

interface CatalogProps {
  catalog: Array<{
    name: string;
    products: Product[];
  }>;
}

const Catalog = ({ catalog }: CatalogProps) => {
  const [active, setActive] = React.useState(0);
  const router = useRouter();
  const { t } = useTranslation("catalog");
  const locale = router.locale === "en" ? "ru" : "en";

  return (
    <section className={styles.catalog} id="catalog">
      <h2 className={styles.catalogTitle}>{t("title")}</h2>
      <div className={styles.catalogWrapper}>
        <div className={styles.catalogMenu}>
          {catalog.map((theme, index) => (
            <a
              key={theme.name}
              onClick={() => setActive(index)}
              className={`${styles.catalogLink} ${
                index === active && styles.catalogLinkActive
              }`}
            >
              {theme.name}
            </a>
          ))}
        </div>
        <div className={styles.catalogProducts}>
          <Slider products={catalog[active].products} />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
