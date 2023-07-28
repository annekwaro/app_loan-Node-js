import { connection } from "./connection";
import { Lender } from "../entities";

const collection = connection.db("loanapp").collection<Lender>("lender");

export const lenderRepository = {
  findAll() {
    return collection.find().toArray();
  },
  async persist(lender: Lender) {
    const result = await collection.insertOne(lender);
    lender._id = result.insertedId;
    return lender;
  },
};
