import React, { useState } from "react";

import Logo from "./assets/img/logo.svg";

import OpenBurgerMenu from "./assets/img/icon-menu.svg";
import CloseBurgerMenu from "./assets/img/icon-menu-close.svg";

import styles from "./assets/css/Header.module.css";

interface headerProps {
  menuOptions: { id: string; title: string }[];
}

const Header = (props: headerProps) => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(true);
  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <a href="https://duckduckgo.com">
          <img
            src={Logo}
            alt={"Logotype"}
            className={styles["logo"]}
            onDragStart={(e) => e.preventDefault()}
          />
        </a>
        <img
          src={isOpenBurgerMenu ? OpenBurgerMenu : CloseBurgerMenu}
          alt=""
          className="burger-menu"
          onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
        />
        {isOpenBurgerMenu === false ? (
          <ul>
            {props.menuOptions.map((option) => (
              <li key={option.id}>
                <a href="https://duckduckgo.com">{option.title}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
