// @ts-nocheck
import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import addToCartBtn from "../assets/icons/bt_add_to_cart.svg";

import favIcon from "../assets/logos/favicon_yard_sale.svg"

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0] || favIcon} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartBtn} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
