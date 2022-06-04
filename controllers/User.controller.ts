import { Request, Response } from "express";
import { Dog } from "../models/Dog.model";
import { Role } from "../models/Role";
import { User } from "../models/user.model";

const jwt = require("jsonwebtoken");

export const findByPkUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id, { include: [Dog, Role] });
  return res.status(200).json(user);
};

export const findAllUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allUser: User[] = await User.findAll();
  return res.status(200).json(allUser);
};

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { firstname, lastname, age, address, email, password } = req.body;

  console.log(req.body);
  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log(err);
    }
  );

  if (alreadyExistsUser) {
    return res.json({ message: "User with email already exists!" });
  }
  const newUser = new User({
    firstname,
    lastname,
    age,
    address,
    email,
    password,
  });
  const saveUser = await newUser.save().catch((err) => {
    console.log(err);
    res.json({ error: "Cannot register" });
  });

  if (saveUser) {
    return res.status(200).json({ message: "Ok" });
  } else {
    return res.json({ message: "Cannot register" });
  }
  //   return res.json({ message: "aaa" });
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  console.log(req.body);
  const userWithEmail = await User.findOne({
    where: { email },
    raw: true,
  }).catch((err) => {
    console.log(err);
  });

  //   console.log(userWithEmail);
  if (!userWithEmail) {
    return res.json({ message: "Email  does" });
  }

  if (userWithEmail!.password !== password) {
    return res.json({ message: "Pass does" });
  }

  const jwtToken = jwt.sign(
    {
      id: userWithEmail!.id,
      email: userWithEmail!.email,
    },
    "toong",
    { expiresIn: "1m" }
  );
  return res.status(200).json({ user: userWithEmail, token: jwtToken });
};
