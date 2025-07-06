import { body, param, validationResult } from "express-validator";

// Middleware de validation global - Renvoie les erreurs
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Middleware de validation pour l'inscription
export const registerValidator = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("Le prénom est requis")
    .isLength({ max: 20 })
    .withMessage("20 caractères maximum"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Le nom est requis")
    .isLength({ max: 30 })
    .withMessage("30 caractères maximum"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("L'email n'est pas valide")
    .isLength({ max: 50 })
    .withMessage("50 caractères maximum")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Le mot de passe est requis")
    .isLength({ min: 6, max: 15 })
    .withMessage("Le mot de passe doit contenir entre 6 et 15 caractères"),

  body("rgpdAccepted")
    .equals("true")
    .withMessage("Vous devez accepter les conditions pour continuer"),

  validate,
];

// Middleware de validation pour la connexion
export const loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("L'email n'est pas valide")
    .normalizeEmail(),

  body("password").notEmpty().withMessage("Le mot de passe est requis"),

  validate,
];

// Middleware de validation de paramètre id pour les URL
export const idParamValidator = [
  param("id").isUUID().withMessage("Identifiant invalide"),
  validate,
];

// Middleware de validation pour la création de recette
export const createRecipeValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Le titre est requis")
    .isLength({ max: 100 })
    .withMessage("100 caractères maximum"),

  body("description")
    .optional()
    .isString()
    .withMessage("La description doit être une chaîne de caractères"),

  body("recipeUrl")
    .optional({ nullable: true, checkFalsy: true })
    .isURL()
    .withMessage("L'URL de la recette n'est pas valide"),

  body("instructions")
    .notEmpty()
    .withMessage("Les instructions sont requises")
    .isLength({ min: 10 })
    .withMessage("Les instructions doivent faire au moins 10 caractères"),

  body("prepTime")
    .isInt({ min: 1 })
    .withMessage("Le temps de préparation doit être un entier supérieur à 0"),

  body("cookTime")
    .isInt({ min: 0 })
    .withMessage("Le temps de cuisson doit être un entier positif"),

  body("serve")
    .isInt({ min: 1 })
    .withMessage("Le nombre de personnes doit être supérieur à 0"),

  body("ingredientList").custom((value) => {
    const parsed = typeof value === "string" ? JSON.parse(value) : value;
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error("La liste des ingrédients ne peut pas être vide");
    }
    return true;
  }),

  ...["moodIds", "typeIds", "dietIds", "originIds"].map((field) =>
    body(field).custom((value) => {
      const parsed = typeof value === "string" ? JSON.parse(value) : value;
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error(`${field} ne peut pas être vide`);
      }
      for (const id of parsed) {
        if (typeof id !== "string" || !/^[0-9a-fA-F\-]{36}$/.test(id)) {
          throw new Error(
            `Chaque élément de ${field} doit être un UUID valide`
          );
        }
      }
      return true;
    })
  ),

  validate,
];

// Middleware de validation pour la mise à jour d'une recette
export const updateRecipeValidator = [
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Le titre ne peut pas être vide")
    .isLength({ max: 100 })
    .withMessage("100 caractères maximum"),

  body("description")
    .optional()
    .isString()
    .withMessage("La description doit être une chaîne de caractères"),

  body("recipeUrl")
    .optional({ nullable: true })
    .isURL()
    .withMessage("L'URL de la recette n'est pas valide"),

  body("instructions")
    .optional()
    .notEmpty()
    .withMessage("Les instructions ne peuvent pas être vides")
    .isLength({ min: 10 })
    .withMessage("Les instructions doivent faire au moins 10 caractères"),

  body("prepTime")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Le temps de préparation doit être un entier > 0"),

  body("cookTime")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Le temps de cuisson doit être un entier positif"),

  body("serve")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Le nombre de personnes doit être supérieur à 0"),

  body("ingredientList")
    .optional()
    .custom((value) => {
      const parsed = typeof value === "string" ? JSON.parse(value) : value;
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error("La liste des ingrédients ne peut pas être vide");
      }
      return true;
    }),

  ...["moodIds", "typeIds", "dietIds", "originIds"].map((field) =>
    body(field)
      .optional()
      .custom((value) => {
        const parsed = typeof value === "string" ? JSON.parse(value) : value;
        if (!Array.isArray(parsed) || parsed.length === 0) {
          throw new Error(`${field} ne peut pas être vide`);
        }
        for (const id of parsed) {
          if (typeof id !== "string" || !/^[0-9a-fA-F\-]{36}$/.test(id)) {
            throw new Error(
              `Chaque élément de ${field} doit être un UUID valide`
            );
          }
        }
        return true;
      })
  ),

  validate,
];
