import express from "express";
import {
  getAllDiets,
  getAllMoods,
  getAllOrigins,
  getAllTypes,
} from "../controllers/categoriesController.js";
getAllDiets;
const categoriesRouter = express.Router();

categoriesRouter.get("/moods", getAllMoods);
categoriesRouter.get("/types", getAllTypes);
categoriesRouter.get("/diets", getAllDiets);
categoriesRouter.get("/origins", getAllOrigins);

export default categoriesRouter;
