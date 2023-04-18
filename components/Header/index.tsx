import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Drawler from "../Drawler";
import { useTranslation, Trans } from "next-i18next";
import Link from "next/link";

import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

interface HeaderProps {
  changeTo: string;
}

const Header = ({ changeTo }: HeaderProps) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation("common");

  const menus = [
    { name: t("menu.first"), href: "catalog" },
    { name: t("menu.second"), href: "aboutUs" },
    { name: t("menu.third"), href: "materials" },
    { name: t("menu.fourth"), href: "testimonials" },
    { name: t("menu.fifth"), href: "contacts" },
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

  const skipLink = (id: string) => {
    setOpen(false);
    const container: HTMLElement | null = document.querySelector(`#${id}`);
    if (container) {
      container.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <a className={styles.logo}>Panto</a>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          {menus.map((menu) => (
            <div key={menu.name}>
              {transitions((style, item) => (
                <animated.div style={style}>
                  <li>
                    <a onClick={() => skipLink(menu.href)}>{menu.name}</a>
                  </li>
                </animated.div>
              ))}
            </div>
          ))}
        </ul>
      </nav>
      {transitions((style, item) => (
        <animated.div style={style}>
          <Link href="/" locale={changeTo}>
            <button className={styles.language}>{t("locale")}</button>
          </Link>
        </animated.div>
      ))}
      <button onClick={toggleNav} className={styles.burger}>
        <Image src={"icon/menu.svg"} alt="menu" width={40} height={40} />
      </button>
      {open && (
        <Drawler
          menus={menus}
          toggleNav={() => toggleNav()}
          skipLink={(href) => skipLink(href)}
        />
      )}
    </header>
  );
};

export default Header;
