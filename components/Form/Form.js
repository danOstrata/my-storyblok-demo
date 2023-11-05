import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";

import { Button } from "../shadcn/components/ui/button";

const Form = ({ blok }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = (data) => {
    console.log(data, blok.Endpoint);
  };

  return (
    <form
      className="text-left max-w-lg mx-auto"
      {...storyblokEditable(blok)}
      onSubmit={handleSubmit(submitForm)}
    >
      {blok.Inputs.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          register={register}
          errors={errors}
        />
      ))}
      <Button variant="default" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
