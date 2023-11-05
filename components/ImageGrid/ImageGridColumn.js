import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import styles from "./ColumnImage.module.css";

const ImageGridColumn = ({ blok }) => (
  <div className={styles["column"]} {...storyblokEditable(blok)}>
    {blok.images.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default ImageGridColumn;
