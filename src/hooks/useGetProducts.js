import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  //The way the professor used the useEffect hook no longer works. useEffect hook must always return a synchronous function.
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return products;
};

export default useGetProducts;
