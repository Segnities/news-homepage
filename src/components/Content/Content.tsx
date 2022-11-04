import React from "react";

import styles from "./assets/css/Content.module.css";
import MainInfo from "./MainInfo";
import TopNewsList from "./TopNewsList";

const Content = () => {
    return(
        <main className={styles['content']}>
            <MainInfo/>
            <TopNewsList/>
        </main>
    );
};

export default Content;