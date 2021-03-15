import { ADD_PRODUCT } from "../Actions/Product.type";

export const initalProductState = [];

export const productReducer = (state = initalProductState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    default:
      return state;
  }
};
