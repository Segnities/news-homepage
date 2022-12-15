import React from "react";


import ImageContentDesktop from "./assets/img/image-web-3-desktop.jpg";
import ImageContentMobile from "./assets/img/image-web-3-mobile.jpg";

import styles from "./assets/css/Content.module.css";

const ContentPicture = () => {
    return (
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
    );
}

export default ContentPicture;