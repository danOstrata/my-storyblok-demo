import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <section>
      <h2
        className="my-0 mx-auto w-11/12 max-w-7xl md:text-xl mb-10 text-slate-700"
        {...storyblokEditable(blok)}
      >
        {blok.headline}
      </h2>
    </section>
  );
};

export default Teaser;
