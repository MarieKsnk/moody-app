import { Recipe } from "./RecipeData";

export type MoodData = {
  id: string;
  name: string;
};

export type TypeData = {
  id: string;
  name: string;
};

export type DietData = {
  id: string;
  name: string;
};

export type OriginData = {
  id: string;
  name: string;
};

export type MoodPageProps = {
  mood: MoodData;
  recipes: Recipe[];
};
