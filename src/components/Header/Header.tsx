import React, { useState } from "react";

import Logo from "./assets/img/logo.svg";

import OpenBurgerMenu from "./assets/img/icon-menu.svg";
import CloseBurgerMenu from "./assets/img/icon-menu-close.svg";

import styles from "./assets/css/Header.module.css";
import { MenuList } from "./MenuList";
import { MenuIcon } from "./MenuIcon";
import HeaderMobileMenu from "../UI/HeaderMobileMenu/HeaderMobileMenu";

interface headerProps {
  menuOptions: { id: string; title: string }[];
  isOpenBurgerMenu:boolean;
  setIsOpenBurgerMenu:(value:boolean)=>void;
}

const Header = (props: headerProps) => {
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
        <MenuIcon
          isOpenBurgerMenu={props.isOpenBurgerMenu}
          openBurgerMenu={OpenBurgerMenu}
          closeBurgerMenu={CloseBurgerMenu}
          setIsOpenBurgerMenu={props.setIsOpenBurgerMenu}
          styles={styles["burger-menu"]}
        />
        <MenuList menuOptions={props.menuOptions} />
      </nav>
    </header>
  );
};

export default Header;
