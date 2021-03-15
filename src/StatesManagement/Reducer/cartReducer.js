import { SHOW_CART } from "../Actions/Header.type";

const initialCartState = [];

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case SHOW_CART:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default cartReducer;
