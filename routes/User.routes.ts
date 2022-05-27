import { Express } from "express-serve-static-core";
import { findAllUsers, findByPkUser } from "../controllers/User.controller";

export function initUserrouter(app: Express) {
  app.get("/user/:id", findByPkUser);
  app.get("/users", findAllUsers);
}
