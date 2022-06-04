import { Express } from "express-serve-static-core";
import {
  addRow,
  createNewSheets,
  createSheets,
  getMeta,
  getRows,
  updateValue,
} from "../controllers/GoogleSheet";

export function initGoogleSheetrouter(app: Express) {
  app.get("/meta", getMeta);
  app.get("/rows", getRows);
  app.post("/rows", addRow);
  app.post("/create", createSheets);
  app.post("/createNew", createNewSheets);
  app.put("/updatevalue", updateValue);
}
