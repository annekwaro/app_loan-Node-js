import { Router } from "express";
import Joi from "joi";
import { lenderRepository } from "../repository/lender-repository";

export const lenderController = Router();

lenderController.get("/", async (req, res) => {
  res.json(await lenderRepository.findAll());
});

lenderController.post("/", async (req, res) => {
  const lender = req.body;
  const { error } = lenderValidation.validate(lender);
  if (error) {
    res.status(400).json(error);
    return;
  }
  await lenderRepository.persist(lender);
  res.status(201).json(lender);
});

const lenderValidation = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  email: Joi.string().required(),
  telephone: Joi.number().required(),
  department: Joi.string().required(),
  date: Joi.date().required(),
});
