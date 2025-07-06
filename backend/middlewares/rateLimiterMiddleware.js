import rateLimit from "express-rate-limit";

// Middleware rate limit - Limitations à appliquer sur les différents formulaires pour éviter les attaques et le spam
export const rateLimiterMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Trop de tentatives, merci de réessayer d'ici 15 minutes" },
});
