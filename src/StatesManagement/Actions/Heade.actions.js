import { ADD_TO_CART, SHOW_CART } from "./Header.type";

export const showCart = (data) => ({
  type: SHOW_CART,
  payload: data,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
