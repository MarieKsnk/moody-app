import axios from "axios";

export async function fetchMoods() {
  const res = await axios.get("http://localhost:8000/api/categories/moods");
  return res.data.moods;
}
