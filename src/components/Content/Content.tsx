import React from "react";

import { nanoid } from "nanoid";

import NewsList from "../NewsList/NewsList";
import NewsIntro from "../Intro/NewsIntro";
import ContentPicture from "./ContentPicture";

import styles from "./assets/css/Content.module.css";

const Content = () => {
  const newsList: { id: string; title: string; body: string }[] = [
    {
      id: nanoid(),
      title: "Hydrogen VS Electrics cars",
      body: "Will hydrogen-fueled cars ever catch up to EVs",
    },
    {
      id: nanoid(),
      title: "The Dowsides of AI Artistry",
      body: "What are the possibles adverse effects of on-demand Ai image generation?",
    },
    {
      id: nanoid(),
      title: "Is VC Funding Drying Up?",
      body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <main className={styles["content"]}>
      <div className={styles["news-content-wrapper"]}>
        <article className={styles["welcome"]}>
          <ContentPicture />
          <NewsIntro />
        </article>
        <NewsList list={newsList} />
      </div>
      <article className={styles["top-news"]}></article>
    </main>
  );
};

export default Content;
