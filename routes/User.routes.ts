import { Express } from "express-serve-static-core";
import {
  findAllUsers,
  findByPkUser,
  login,
  register,
} from "../controllers/User.controller";

export function initUserrouter(app: Express) {
  app.get("/user/:id", findByPkUser);
  app.get("/users", findAllUsers);
  app.post("/register", register);
  app.post("/login", login);
}
