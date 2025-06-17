import axios from "axios";

export async function fetchOrigins() {
  const res = await axios.get("http://localhost:8000/api/categories/origins");
  return res.data.origins;
}
