import { Router } from "express";
import Joi from "joi";
import { borrowerRepository } from "../repository/borrower-repository";

export const borrowerController = Router();

borrowerController.get("/", async (req, res) => {
  res.json(await borrowerRepository.findAll());
});

borrowerController.post("/", async (req, res) => {
  const borrower = req.body;
  const { error } = borrowerValidation.validate(borrower);
  if (error) {
    res.status(400).json(error);
    return;
  }
  await borrowerRepository.persist(borrower);
  res.status(201).json(borrower);
});

const borrowerValidation = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  email: Joi.string().required(),
  telephone: Joi.number().required(),
  date: Joi.date().required(),
});
