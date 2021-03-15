import { ADD_PRODUCT } from "./Product.type";

export const addToProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
