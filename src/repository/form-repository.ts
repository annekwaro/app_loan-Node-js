import { connection } from "./connection";
import { Form } from "../entities";

const collection = connection.db("loanapp").collection<Form>("form");

export const formRepository = {
  findAll() {
    return collection.find().toArray();
  },
  async persist(form: Form) {
    const result = await collection.insertOne(form);
    form._id = result.insertedId;
    return form;
  },
};
