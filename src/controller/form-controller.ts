import { Router } from "express";
import Joi from "joi";
import { formRepository } from "../repository/form-repository";

export const formController = Router();

formController.get("/", async (req, res) => {
  res.json(await formRepository.findAll());
});

formController.post("/", async (req, res) => {
  const form = req.body;
  const { error } = formValidation.validate(form);
  if (error) {
    res.status(400).json(error);
    return;
  }
  await formRepository.persist(form);
  res.status(201).json(form);
});

const formValidation = Joi.object({
  name: Joi.string().required(),
  projectBrief: Joi.string().required(),
  telephone: Joi.number().required(),
});
