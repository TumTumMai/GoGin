import { Sequelize } from "sequelize-typescript";

import { Dog } from "../models/Dog.model";
import { User } from "../models/user.model";
import { Actor } from "../models/Actor";
import { Genre } from "../models/Genre";
import { MovieActor } from "../models/MovieActor";
import { MovieGenre } from "../models/MovieGenre";
import { Movie } from "../models/Movie";
import { Role } from "../models/Role";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "helloworld",
  database: "test",
  logging: false,
  models: [Dog, User, Actor, Genre, Movie, MovieActor, MovieGenre, Role],
});

export default connection;
