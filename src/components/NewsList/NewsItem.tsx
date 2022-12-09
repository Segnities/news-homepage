import React from "react";

import styles from "./assets/css/NewsList.module.css";

interface newsItemProps {
  title:string;
  body:string;
}

const NewsItem = (props: newsItemProps) => {
  
  return (
    <section className={styles["new-news-item"]}>
      <h3>
        <a
          href="https://www.oxfordstudent.com/2020/05/08/why-spongebob-squarepants-is-quite-possibly-the-best-cartoon-ever/"
          target={"_blank"}
        >
          {props.title}
        </a>
      </h3>
      <p>{props.body}</p>
    </section>
  );
};

export default NewsItem;
