import express from "express";
import * as subsServices from "../services/subsServices";

const router = express.Router();

// GET -> View all entries of subs
router.get("/", (_req, res) => {
  res.send(subsServices.getSubs());
});

export default router;
