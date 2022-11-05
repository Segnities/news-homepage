import React from "react";

import styles from "./assets/css/NewsList.module.css";

const NewsItem = () => {
    return (
      <section className={styles["new-news-item"]}>
        <h3>
          <a href="https://www.oxfordstudent.com/2020/05/08/why-spongebob-squarepants-is-quite-possibly-the-best-cartoon-ever/">
            Hydrogen VS Electrics cars
          </a>
        </h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs</p>
      </section>
    );
}

export default NewsItem;