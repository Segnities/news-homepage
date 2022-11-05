import React from "react";

import styles from "./assets/css/NewsIntro.module.css";

const NewsIntro = () => {
    return (
      <section className={styles["news-intro"]}>
        <h1>The Bright Future Of Web 3.0?</h1>
        <div className={styles["news-intro-description"]}>
          <p>
            We dive into the next evoulution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>
            <a href="https://www.oxfordstudent.com/2020/05/08/why-spongebob-squarepants-is-quite-possibly-the-best-cartoon-ever/">
              READ MORE
            </a>
          </button>
        </div>
      </section>
    );
}

export default NewsIntro;