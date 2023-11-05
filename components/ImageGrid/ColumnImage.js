import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

import styles from "./ColumnImage.module.css";

const ColumnImage = ({ blok }) => {
  return (
    <figure className={styles["container__item"]} {...storyblokEditable(blok)}>
      <div className={styles["container__item--img"]}>
        <Image
          className={styles["img__item"]}
          src={blok.image.filename}
          width={500}
          height={700}
        />
      </div>
      <figcaption className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {blok.label}
      </figcaption>
    </figure>
  );
};

export default ColumnImage;
