import { Sequelize } from "sequelize-typescript";

import { Dog } from "../model/models";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "helloworld",
  database: "test",
  logging: false,
  models: [Dog],
});

export default connection;