import React from "react";

import styles from "./assets/css/Content.module.css";

import ImageContentDesktop from "./assets/img/image-web-3-desktop.jpg";
import ImageContentMobile from "./assets/img/image-web-3-mobile.jpg";

const Content = () => {
  return (
    <main className={styles["content"]}>
      <div className={styles["news-content-wrapper"]}>
        <article className={styles["news-content"]}>
          <picture>
            <source
              media="(max-width: 720px)"
              className={styles["news-intro-image"]}
              srcSet={ImageContentMobile}
            />
            <img
              src={ImageContentDesktop}
              alt=""
              className={styles["news-intro-image"]}
              onDragStart={(e) => e.preventDefault()}
            />
          </picture>
          <section className={styles["news-intro"]}>
            <h1>The Bright Future Of Web 3.0?</h1>
            <div className={styles["news-intro-description"]}>
              <p>
                We dive into the next evoulution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>
                <a href="https://www.oxfordstudent.com/2020/05/08/why-spongebob-squarepants-is-quite-possibly-the-best-cartoon-ever/">
                  READ MORE
                </a>
              </button>
            </div>
          </section>
        </article>
        <article className={styles["new-news"]}>
          <h2>New</h2>
          <section className={styles['new-news-item']}>
            <h3>
              <a href="https://www.oxfordstudent.com/2020/05/08/why-spongebob-squarepants-is-quite-possibly-the-best-cartoon-ever/">
                Hydrogen VS Electrics cars
              </a>
            </h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs</p>
          </section>
        </article>
      </div>
      <article className={styles["top-news"]}></article>
    </main>
  );
};

export default Content;
