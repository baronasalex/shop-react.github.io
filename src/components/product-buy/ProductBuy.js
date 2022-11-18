import React from 'react'
import { useDispatch } from 'react-redux';
import { Cart4 } from "react-bootstrap-icons";
import { setItemInCart } from '../../redux/cart/reducer';

export const ProductBuy = ({product}) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(product));
    }
  return (
    <div
    className="add-to-cart"
    onClick={ handleClick }
  >
    <Cart4 className="cart-icon" size={20} />
  </div>
  )
}
