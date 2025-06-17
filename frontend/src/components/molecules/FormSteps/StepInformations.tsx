import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { NextButton } from "@/components/atoms/Buttons/NextButton";
import { Textarea } from "@/components/atoms/Textarea";
import { RecipeFormData } from "@/types/RecipeFormData";

export default function StepInformations({
  defaultValues,
  nextStep,
}: {
  defaultValues?: Partial<RecipeFormData>;
  nextStep: (data: Partial<RecipeFormData>) => void;
}) {
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

  // Permet d'afficher la preview de la photo de la recette de maniere dynamique
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

  // Function permettant la validation de l'etape (avec des controles pour la photo) et de passer a l'etape suivante
  const onSubmit = (
    data: Pick<
      RecipeFormData,
      "title" | "description" | "recipePicture" | "recipeUrl"
    >
  ) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!data.recipePicture || data.recipePicture.length === 0) {
      setError("recipePicture", { message: "La photo est obligatoire." });
      return;
    }
    const file = data.recipePicture[0];
    if (!allowedTypes.includes(file.type)) {
      setError("recipePicture", {
        message: "Seul les fichiers JPEG, PNG ou WEBP sont autorisés.",
      });
      return;
    }
    nextStep(data);
  };

  return (
    <div>
      <h2>INFORMATIONS</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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
          <p id="title-error" role="alert">
            {errors.title.message}
          </p>
        ) : (
          <p id="title-help">
            Donne un nom à ta recette (obligatoire, 50 caractères max).
          </p>
        )}
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
          <p id="description-error" role="alert">
            {errors.description.message}
          </p>
        ) : (
          <p id="description-help">(Description optionnelle).</p>
        )}
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
            errors.recipePicture ? "recipePicture-error" : "recipePicture-help"
          }
        />
        {errors.recipePicture ? (
          <p id="recipePicture-error" role="alert">
            {errors.recipePicture.message}
          </p>
        ) : (
          <p id="recipePicture-help">
            Image obligatoire, JPEG, PNG ou WebP. Max : 2 Mo. Tips : Si ta
            recette vient d’Instagram et que tu ne l’as pas encore réalisée,
            prends soin de faire une capture d’écran représentative de la
            recette.
          </p>
        )}
        {previewUrl && (
          <img src={previewUrl} alt="Aperçu de la photo de la recette" />
        )}
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
        <p id="recipeUrl-help">
          Tu peux ajouter un lien vers la source d’origine de la recette si
          besoin (instagram, youtube, etc)
        </p>
        <NextButton ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (ingrédients)" />
        <p>* champs obligatoires.</p>
      </form>
    </div>
  );
}
