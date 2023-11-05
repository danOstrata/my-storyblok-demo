import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import { Label } from "../shadcn/components/ui/label";
import { Input } from "../shadcn/components/ui/input";
import { Textarea } from "../shadcn/components/ui/textarea";

const FormInputs = ({ blok, register, errors }) => {
  if (blok.Type === "textArea") {
    return (
      <div {...storyblokEditable(blok)} className="space-y-2">
        <Label>{blok.Label}</Label>
        <Textarea
          className="min-h-[100px]"
          placeholder={blok.Placeholder}
          {...register(blok.Name, {
            required: true,
          })}
        />
        {blok.Validators.map((nestedBlok) => (
          <StoryblokComponent
            blok={nestedBlok}
            key={nestedBlok._uid}
            errors={errors}
            inputName={blok.Name}
          />
        ))}
      </div>
    );
  }

  return (
    <div {...storyblokEditable(blok)} className="space-y-2">
      <Label>{blok.Label}</Label>
      <Input
        type={blok.Type}
        placeholder={blok.Placeholder}
        {...register(blok.Name, {
          required: blok.Type === "tel" ? false : true,
          pattern:
            (blok.Type === "email" && /^[a-z0-9,_%+-]+@[a-z0-9,-]+\.[a-z{2,4}$]/) ||
            (blok.Type === "tel" &&
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,8}$/),
          maxLength:
            blok.Type === "tel" &&
            blok.Validators.find((findMax) => findMax.maxLength).maxLength,
          minLength:
            blok.Type === "tel" &&
            blok.Validators.find((findMin) => findMin.minLength).minLength,
        })}
      />
      {blok.Validators.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          errors={errors}
          inputName={blok.Name}
        />
      ))}
    </div>
  );
};

export default FormInputs;
