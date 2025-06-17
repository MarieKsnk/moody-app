import express from "express";
import { getAllMoods } from "../controllers/moodsController.js";
import { getAllTypes } from "../controllers/typesController.js";
import { getAllDiets } from "../controllers/dietsController.js";
import { getAllOrigins } from "../controllers/originsController.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/moods", getAllMoods);
categoriesRouter.get("/types", getAllTypes);
categoriesRouter.get("/diets", getAllDiets);
categoriesRouter.get("/origins", getAllOrigins);

export default categoriesRouter;
