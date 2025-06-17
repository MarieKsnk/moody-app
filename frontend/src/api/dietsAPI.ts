import axios from "axios";

export async function fetchDiets() {
  const res = await axios.get("http://localhost:8000/api/categories/diets");
  return res.data.diets;
}
