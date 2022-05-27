import "reflect-metadata";
import express, { Request, Response } from "express";
import connection from "./config/Connection";
import { initDogrouter } from "./routes/Dog.routes";
import { initGoogleSheetrouter } from "./routes/GoogleSheet.routes";
import { initUserrouter } from "./routes/User.routes";

// import { Dog } from "./model/models";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Sequelize Example 🤟" });
});

initDogrouter(app);
initGoogleSheetrouter(app);
initUserrouter(app);

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
