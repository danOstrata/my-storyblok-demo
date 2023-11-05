import { storyblokEditable } from "@storyblok/react";

const MinLength = ({ blok, errors }) => {
  return (
    <div className="text-xs text-red-600" {...storyblokEditable(blok)}>
      {errors.phoneNumber?.type === "minLength" && blok.errorMessage}
    </div>
  );
};

export default MinLength;
