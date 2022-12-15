import React, { useState } from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import HeaderMobileMenu from "./components/UI/HeaderMobileMenu/HeaderMobileMenu";
import { MenuList } from "./components/Header/MenuList";

import styles from "./App.module.css";
import { nanoid } from "nanoid";

function App() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const menuOptions = [
    {
      id: nanoid(),
      title: "Home",
    },
    {
      id: nanoid(),
      title: "New",
    },
    {
      id: nanoid(),
      title: "Popular",
    },
    {
      id: nanoid(),
      title: "Trending",
    },
    {
      id: nanoid(),
      title: "Categories",
    },
  ];

  return (
      <div className={styles["App"]}>
        <HeaderMobileMenu
          isOpen={isOpenBurgerMenu}
          menuList={<MenuList menuOptions={menuOptions} />}
        />
        <Header
          menuOptions={menuOptions}
          isOpenBurgerMenu={isOpenBurgerMenu}
          setIsOpenBurgerMenu={setIsOpenBurgerMenu}
        />
        <Content />
      </div>
  );
}

export default App;
