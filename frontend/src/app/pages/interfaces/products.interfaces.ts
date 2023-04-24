export interface Product {
  _id: string;
  description: string;
  stock: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}
