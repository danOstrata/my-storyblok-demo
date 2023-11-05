import { storyblokEditable } from "@storyblok/react";

const MaxLength = ({ blok, errors }) => {
  return (
    <div className="text-xs text-red-600" {...storyblokEditable(blok)}>
      {errors.phoneNumber?.type === "maxLength" && blok.errorMessage}
    </div>
  );
};

export default MaxLength;
