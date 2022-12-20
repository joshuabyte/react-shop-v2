// @ts-nocheck
import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  //In order to remove items with the same id, the addToCart and removeFromCart functions were modified. addToCart now creates a unique id for each product added.
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, { ...payload, idCart: state.cart.length + 1 }],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.idCart !== payload.idCart),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
