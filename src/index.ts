import express from "express";
import diaryRoutes from "./routes/diaries";
import subsRoutes from "./routes/subs";

const PORT = 3001;
const app = express();

// Middleware
app.use(express.json()); // middleware que transforma la req.body en un json

//  Routes
app.use("/api/diaries", diaryRoutes);
app.use("/api/subs", subsRoutes);

// Run
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
