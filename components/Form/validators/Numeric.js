import { storyblokEditable } from "@storyblok/react";

const Numeric = ({ blok, errors }) => {
  return (
    <div className="text-xs text-red-600" {...storyblokEditable(blok)}>
      {errors.phoneNumber?.type === "pattern" && blok.errorMessage}
    </div>
  );
};

export default Numeric;
