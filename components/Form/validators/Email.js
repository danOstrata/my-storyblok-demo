import { storyblokEditable } from "@storyblok/react";

const Email = ({ blok, errors }) => {
  return (
    <div className="text-xs text-red-600" {...storyblokEditable(blok)}>
      {errors.email?.type === "pattern" && blok.errorMessage}
    </div>
  );
};

export default Email;
