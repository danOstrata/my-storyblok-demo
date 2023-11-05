import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

const ImageTextCard = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="my-0 mx-auto w-11/12 max-w-7xl mt-20 relative min-h-[100vh]"
    >
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 mb-7 text-start ">
        {blok.headline}
      </h1>

      <div className="space-y-6 lg:w-[60%] text-start z-10 relative">
        {render(blok.text, {
          textResolver: (str) => (
            <span className=" text-slate-500 md:text-xl">{str}</span>
          ),
        })}
      </div>
      <div className="lg:z-0 lg:absolute relative mt-10 lg:mt-0 lg:bottom-[95px] lg:right-0 mx-auto object-cover rounded-full h-[500px] w-[500px]">
        <Image
          className="lg:z-0 lg:absolute relative mt-10 lg:mt-0 lg:bottom-[95px] lg:right-0 mx-auto object-cover rounded-full h-[500px] w-[500px]"
          src={blok.image.filename}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ImageTextCard;
