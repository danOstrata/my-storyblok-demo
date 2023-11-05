import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import styles from "./ColumnImage.module.css";

const ImageGridColumnReverse = ({ blok }) => (
  <div
    className={[styles["column"], styles["column__reverse"]].join(" ")}
    {...storyblokEditable(blok)}
  >
    {blok.images.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default ImageGridColumnReverse;
