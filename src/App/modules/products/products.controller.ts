import { Request, Response } from 'express';

const createProduct = (req: Request, res: Response) => {
  try {
    //productServices.createProductDB ke call dibo.

    res.send('Test POST request to the homepage before insert data');
  } catch (error) {
    console.log(error);
  }
};
export const productController = { createProduct };
