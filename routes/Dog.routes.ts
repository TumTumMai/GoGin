import { Express } from "express-serve-static-core";
import {
  createDog,
  deleteDog,
  findAllDog,
  findByPkDog,
  updateDog,
} from "../controllers/Dog.controller";
export function initDogrouter(app: Express) {
  app.get("/dogs", findAllDog);
  app.get("/dog/:id", findByPkDog);
  app.post("/dog", createDog);
  app.put("/dog/:id", updateDog);
  app.delete("/dog/:id", deleteDog);
}
