import React from "react";
import styles from "./style.module.scss";

import Image from "next/image";
interface DrawlerProps {
  menus: Array<{ name: string; href: string }>;
  toggleNav: () => void;
  skipLink: (href: string) => void;
}

const Drawler = ({ menus, toggleNav, skipLink }: DrawlerProps) => {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawer__sidebar}>
        <div className={styles.drawer__sidebarTop}>
          <button className={styles.drawer__closeButton} onClick={toggleNav}>
            <Image src={"icon/close.svg"} alt="menu" width={30} height={30} />
          </button>
          <a className={styles.drawer__language}>RU</a>
        </div>
        <nav className={styles.drawer__navbar}>
          <ul className={styles.drawer__menu}>
            {menus.map((menu) => (
              <li key={menu.name}>
                <a onClick={() => skipLink(menu.href)}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Drawler;
