import React from "react";

import { nanoid } from "nanoid";

import NewsList from "../NewsList/NewsList";
import NewsIntro from "../Intro/NewsIntro";
import ContentPicture from "./ContentPicture";

import RetroPCsImage from "./assets/img/image-retro-pcs.jpg";
import TopLaptopsImage from "./assets/img/image-top-laptops.jpg";
import GamingGrowthImage from "./assets/img/image-gaming-growth.jpg";

import styles from "./assets/css/Content.module.css";
import TopNewsList from "../TopNewsList/TopNewsList";

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

  const topNewsList = [
    {
      id: nanoid(),
      title: "Revivining Retro PCs",
      body: "What happens when old PCs are given modern upgrade?",
      image: RetroPCsImage,
      rating: 1,
    },
    {
      id: nanoid(),
      title: "Top 10 Laptops of 2022",
      body: "Our best picks for various needs and budgets.",
      image: TopLaptopsImage,
      rating: 2,
    },
    {
      id: nanoid(),
      title: "The Growth of Gaming",
      body: "How the pandemic has sparked fresh opportunities.",
      image: GamingGrowthImage,
      rating: 3,
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
      <article className={styles["top-news"]}>
        <TopNewsList list={topNewsList}/>
      </article>
    </main>
  );
};

export default Content;
