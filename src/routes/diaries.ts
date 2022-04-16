import express from "express"; // ESModules
import * as diaryServices from "../services/diaryServices";
import { toNewDiaryEntry } from "../utils";

const router = express.Router();

// GET - View all entries without sensitive info
router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

// GET - View diary entry, search by id
router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(+req.params.id);
  return diary ? res.send(diary) : res.sendStatus(404);
});

// POST - Create new diary entry
router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default router;
