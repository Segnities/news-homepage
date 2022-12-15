import React from "react";

interface menuIconProps {
    isOpenBurgerMenu:boolean;
    openBurgerMenu:string;
    closeBurgerMenu:string;
    setIsOpenBurgerMenu:(value:boolean)=>void;
    styles:string;
}

export function MenuIcon({isOpenBurgerMenu, openBurgerMenu, closeBurgerMenu, setIsOpenBurgerMenu, styles}: menuIconProps) {
    return (  
      <img
        src={isOpenBurgerMenu ? closeBurgerMenu : openBurgerMenu}
        alt=""
        className={styles}
        onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
      />
    );
}