import React from "react";
import { MenuList } from "../../Header/MenuList";

import styles from "./assets/css/HeaderMobileMenu.module.css";

interface headerMobileMenuProps {
  isOpen: boolean;
  menuList: React.ReactElement;
}

export default function HeaderMobileMenu(props: headerMobileMenuProps) {
  return (
    <>
      {props.isOpen ? (
        <div className={styles["wrapper"]}>
          <div className={styles["menu"]}>{props.menuList}</div>
        </div>
      ) : null}
    </>
  );
}
