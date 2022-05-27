import { Request, Response } from "express";
import { Dog } from "../models/Dog.model";
import { User } from "../models/user.model";

export const createDog = async (
  req: Request,
  res: Response
): Promise<Response> => {
  //   console.log(req.body.breed);
  const dog: Dog = await Dog.create({ ...req.body });
  return res.status(201).json(dog);

  //   return res.status(201).json(dog);
  //   return res.send({
  //     message: "Error retrieving note with id ",
  //   });
};

export const findAllDog = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allDogs: Dog[] = await Dog.findAll();
  return res.status(200).json(allDogs);
};

export const findByPkDog = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const dog: Dog | null = await Dog.findByPk(id, { include: [User] });
  // const dog: Dog | null = await Dog.findByPk(id);

  if (dog == null) {
    return res.status(200).json("ไม่มีข้อมูลของ iD นี้");
  }
  return res.status(200).json(dog);
};

export const updateDog = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  await Dog.update({ ...req.body }, { where: { id } });
  const updatedDog: Dog | null = await Dog.findByPk(id);
  return res.status(200).json(updatedDog);
};

export const deleteDog = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const deletedDog: Dog | null = await Dog.findByPk(id);
  await Dog.destroy({ where: { id } });
  return res.status(200).json("ลบข้อมูลสำเร็จ");
};
