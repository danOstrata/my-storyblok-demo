import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import styles from "./ColumnImage.module.css";

const ImageGrid = ({ blok }) => {
  return (
    <section
      className={["my-0 mx-auto w-11/12 max-w-7xl", styles["container__columns"]].join(
        " "
      )}
      {...storyblokEditable(blok)}
    >
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};

export default ImageGrid;
