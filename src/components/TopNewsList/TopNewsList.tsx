import React from "react";

import styles from "./assets/TopNewsList.module.css";

interface topNewsProps {
  list: {
    id: string;
    title: string;
    body: string;
    image: string;
    rating: number;
  }[];
}

const TopNewsList = (props: topNewsProps) => {
  const sortedTopNews = [...props.list].sort((a, b) => a.rating - b.rating);
  return (
    <>
      {sortedTopNews.map((item) => (
        <div className={styles["top-news-item"]} key={item.id}>
          <div className={styles["top-news-item-img"]}>
            <img src={item.image} alt="retro-pcs-image" />
          </div>
          <section className={styles["top-news-description"]}>
            <p className={styles["top-news-rating"]}>{item.rating > 10 ? item.rating : `0${item.rating}`}</p>
            <h4>
              <a
                href="https://www.oxfordstudent.com/2020/05/08/why-spongebob-squarepants-is-quite-possibly-the-best-cartoon-ever/"
                target={"_blank"}
              >
                {item.title}
              </a>
            </h4>
            <p>{item.body}</p>
          </section>
        </div>
      ))}
    </>
  );
};

export default TopNewsList;
