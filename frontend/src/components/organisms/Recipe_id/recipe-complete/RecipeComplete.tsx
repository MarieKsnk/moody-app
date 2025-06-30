import { IRecipeCompleteProps } from "./RecipeComplete.props";
import { TitleRecipe } from "@/components/atoms/Recipe_id_page/title_recipe";
import { RecipeCategories } from "@/components/molecules/Recipe_id_page/recipe_categories";
import { RecipeInfos } from "@/components/molecules/Recipe_id_page/recipe_infos";
import { IngredientsList } from "@/components/atoms/Recipe_id_page/ingredients_list";
import { EtapesList } from "@/components/atoms/Recipe_id_page/etapes_list";
import { RecipeDescription } from "@/components/atoms/Recipe_id_page/recipe_description";

export const RecipeComplete = ({ recipe }: IRecipeCompleteProps) => {
  return (
    <div className="recipe-complete-container">
      <TitleRecipe
        title={recipe.title}
        types={recipe.types.map((t) => t.type.name)}
        author={`${recipe.user?.firstName} ${recipe.user?.lastName}`}
        date={recipe.createdAt}
        imageUrl={recipe.recipePicture}
      />

      <RecipeCategories
        moods={recipe.moods.map((m) => m.mood.name)}
        diets={recipe.diets.map((d) => d.diet.name)}
        origins={recipe.origins.map((o) => o.origin.name)}
      />

      <RecipeInfos
        prepTime={recipe.prepTime}
        cookTime={recipe.cookTime}
        serve={recipe.serve}
      />

      <RecipeDescription
        description={recipe.description}
        recipeUrl={recipe.recipeUrl}
      />

      <IngredientsList ingredients={recipe.ingredients} />

      <EtapesList instructions={recipe.instructions} />
    </div>
  );
};
