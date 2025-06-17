import axios from "axios";

export async function fetchIngredients() {
  const res = await axios.get("http://localhost:8000/api/ingredients");
  return res.data.ingredients;
}
