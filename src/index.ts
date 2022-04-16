import express from "express";
import diaryRoutes from "./routes/diaries";

const PORT = 3000;
const app = express();

// Middleware
app.use(express.json()); // middleware que transforma la req.body en un json

//  Routes
app.use("/api/diaries", diaryRoutes);

// Run
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
