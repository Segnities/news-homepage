import React from "react";

import NewsItem from "./NewsItem";

import styles from "./assets/css/NewsList.module.css";

type list = { id: string; title: string; body: string }[];

interface newsListProps  {
  list: list
}

const NewsList = (props: newsListProps) => {
    return (
      <article className={styles["new-news"]}>
        <h2>New</h2>
        {props.list.map((item) => (
          <NewsItem />
        ))}
      </article>
    );
}

export default NewsList;