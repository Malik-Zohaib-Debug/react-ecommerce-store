import React, { createContext, useEffect, useState, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  products: [],
  basket: [],
  total: 0
}

export const ProductContext = createContext(initialState);

export default function GlobalContext({ children }) {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    async function getData() {
      const data = await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setData(json));
    }

    getData();
  }, []);

  initialState.products = data;

  function addToCart(product) {
    dispatch({
      type: 'ADD_CART',
      dispatch: product
    });
  }

  return (
    <ProductContext.Provider value={{
      products: state.products,
      basket: state.basket,
      total: state.total,
      addToCart
    }}>
      {children}
    </ProductContext.Provider>
  );
}
