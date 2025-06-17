import axios from "axios";

export async function fetchTypes() {
  const res = await axios.get("http://localhost:8000/api/categories/types");
  return res.data.types;
}
