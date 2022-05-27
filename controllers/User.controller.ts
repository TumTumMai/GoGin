import { Request, Response } from "express";
import { Dog } from "../models/Dog.model";
import { Role } from "../models/Role";
import { User } from "../models/user.model";

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
