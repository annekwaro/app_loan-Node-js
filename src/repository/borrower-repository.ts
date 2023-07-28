import { connection } from "./connection";
import { Borrower } from "../entities";

const collection = connection.db("loanapp").collection<Borrower>("borrower");

export const borrowerRepository = {
  findAll() {
    return collection.find().toArray();
  },
  async persist(borrower: Borrower) {
    const result = await collection.insertOne(borrower);
    borrower._id = result.insertedId;
    return borrower;
  },
};
