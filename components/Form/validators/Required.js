import { storyblokEditable } from "@storyblok/react";

const Required = ({ blok, errors, inputName }) => {
  return (
    <div className="text-xs text-red-600" {...storyblokEditable(blok)}>
      {errors.firstName?.type === "required" &&
        inputName === "firstName" &&
        blok.errorMessage}
      {errors.lastName?.type === "required" &&
        inputName === "lastName" &&
        blok.errorMessage}
      {errors.email?.type === "required" && inputName === "email" && blok.errorMessage}
    </div>
  );
};

export default Required;
