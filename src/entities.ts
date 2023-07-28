export interface Lender {
  _id?: any;
  name: string;
  address: string;
  email: string;
  telephone: number;
  department: string;
  date: Date;
}

export interface Borrower {
  _id?: any;
  name: string;
  address: string;
  email: string;
  telephone: number;
  date: Date;
}
export interface Form {
  _id?: any;
  telephone: number;
  name: string;
  projectBrief: string;
}
