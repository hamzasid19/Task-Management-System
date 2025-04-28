import ensureAuthenticated from "../Middleware/authToken.js";
import express from "express";
const router = express.Router();

router.get("/products", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
  ]);
});

export default router;
