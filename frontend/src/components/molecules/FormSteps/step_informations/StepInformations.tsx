import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/atoms/Forms/input";
import { Label } from "@/components/atoms/Forms/label";
import { NextButton } from "@/components/atoms/Buttons/next_button";
import { Textarea } from "@/components/atoms/Forms/textarea";
import { RecipeFormData } from "@/types/RecipeFormData";
import { IStepInformationsProps } from "./StepInformations.props";

export const StepInformations = ({
  defaultValues,
  nextStep,
  existingPicture,
}: IStepInformationsProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<
    Pick<
      RecipeFormData,
      "title" | "description" | "recipePicture" | "recipeUrl"
    >
  >({
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
      recipePicture: defaultValues?.recipePicture,
      recipeUrl: defaultValues?.recipeUrl || "",
    },
  });

  const recipePictureFile = watch("recipePicture")?.[0];
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (recipePictureFile) {
      const url = URL.createObjectURL(recipePictureFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(null);
  }, [recipePictureFile]);

  const onSubmit = (
    data: Pick<
      RecipeFormData,
      "title" | "description" | "recipePicture" | "recipeUrl"
    >
  ) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const file = data.recipePicture?.[0];

    if (file && !allowedTypes.includes(file.type)) {
      setError("recipePicture", {
        message: "Seuls les fichiers JPEG, PNG ou WEBP sont autorisés.",
      });
      return;
    }
    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setError("recipePicture", {
          message: "Seuls les fichiers JPEG, PNG ou WEBP sont autorisés.",
        });
        return;
      }
    }
    nextStep(data);
  };

  return (
    <div className="step-form">
      <h2 className="step-form__title">Informations</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="step-form__form">
        <div className="step-form__group">
          <Label htmlFor="title" required={true}>
            Nom de ta recette
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Ex : Ramen express végétarien"
            register={register("title", {
              required: "Le nom de la recette est requis",
              maxLength: { value: 50, message: "50 caractères maximum" },
            })}
            error={errors.title}
            ariaDescribedBy={errors.title ? "title-error" : "title-help"}
            autoComplete="off"
          />
          {errors.title ? (
            <p id="title-error" role="alert" className="input-error">
              {errors.title.message}
            </p>
          ) : (
            <p id="title-help" className="input-help">
              Donne un nom à ta recette (obligatoire, 50 caractères max).
            </p>
          )}
        </div>

        <div className="step-form__group">
          <Label htmlFor="description" required={false}>
            Description
          </Label>
          <Textarea
            id="description"
            register={register("description")}
            error={errors.description}
            ariaDescribedBy={
              errors.description ? "description-error" : "description-help"
            }
            placeholder="N’hésite pas à ajouter une rapide description ou des conseils si tu le souhaites."
            rows={5}
          />
          {errors.description ? (
            <p id="description-error" role="alert" className="input-error">
              {errors.description.message}
            </p>
          ) : (
            <p id="description-help" className="input-help">
              (Description optionnelle).
            </p>
          )}
        </div>

        <div className="step-form__group">
          <Label htmlFor="recipePicture" required>
            Photo de ta recette
          </Label>
          <Input
            id="recipePicture"
            type="file"
            register={register("recipePicture")}
            error={errors.recipePicture}
            accept="image/png,image/jpeg,image/webp"
            ariaDescribedBy={
              errors.recipePicture
                ? "recipePicture-error"
                : "recipePicture-help"
            }
          />
          {errors.recipePicture ? (
            <p id="recipePicture-error" role="alert" className="input-error">
              {errors.recipePicture.message}
            </p>
          ) : (
            <p id="recipePicture-help" className="input-help">
              Image obligatoire, JPEG, PNG ou WebP. Max : 2 Mo. <br />
              Tips : Si ta recette vient d’Instagram et que tu ne l’as pas
              encore réalisée, prends soin de faire une capture d’écran
              représentative de la recette.
            </p>
          )}
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Aperçu de la nouvelle photo"
              className="step-form__image-preview"
            />
          ) : existingPicture ? (
            <img
              src={existingPicture}
              alt="Image actuelle de la recette"
              className="step-form__image-preview"
            />
          ) : null}
        </div>

        <div className="step-form__group">
          <Label htmlFor="recipeUrl" required={false}>
            Lien de ta recette
          </Label>
          <Input
            id="recipeUrl"
            type="url"
            placeholder="https://..."
            register={register("recipeUrl")}
            error={errors.recipeUrl}
            ariaDescribedBy="recipeUrl-help"
            autoComplete="off"
          />
          <p id="recipeUrl-help" className="input-help">
            Tu peux ajouter un lien vers la source d’origine de la recette si
            besoin (instagram, youtube, etc)
          </p>
        </div>
        <div className="step-form__buttons">
          <NextButton ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (ingrédients)" />
        </div>
        <p className="step-form__required">* champs obligatoires.</p>
      </form>
    </div>
  );
};
