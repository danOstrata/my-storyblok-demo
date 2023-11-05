import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Feature = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    <div className="p-6">
      <Image
        className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl h-64"
        src={blok.image.filename}
        width={400}
        height={192}
      />

      <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {blok.name}
      </h1>
      <div className="flex flex-col justify-between items-center h-fit min-h-[160px]">
        <p className="overflow-hidden text-ellipsis pre-wrap max-w-full line-clamp-5 md:text-lg  text-slate-700">
          {blok.description}
        </p>

        <a
          href="#"
          className="inline-flex items-center mt-4 font-semibold text-purple-900 lg:mb-0 hover:text-slate-700"
          title="read more"
        >
          {" "}
          Read More »{" "}
        </a>
      </div>
    </div>
  </div>
);

export default Feature;
