import React from "react";

import Logo from "./assets/img/logo.svg";

import styles from "./assets/css/Header.module.css";

interface headerProps {
  menuOptions: { id: string; title: string }[];
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
        <ul>
          {props.menuOptions.map((option) => (
            <li key={option.id}>
              <a href="https://duckduckgo.com">{option.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
