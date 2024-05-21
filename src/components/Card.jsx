/* eslint-disable react/prop-types */

import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./Card.module.css"

import { Link } from "react-router-dom";
import { productQuantity, shortenTex } from "../helpers/helper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice";
import { useEffect } from "react";



const Card = ({data}) => {
    const{id,title,image, price} = data;
    const state= useSelector(store=>store.cart)
    const dispatch=useDispatch();
    const quantity= productQuantity(state, id);

   useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state))
   },[state])
    
    
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <h3>{shortenTex(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}><TbListDetails/></Link>
            {quantity ===1 && (
              <button onClick={()=>dispatch(removeItem(data))}><MdDeleteOutline/></button>
            )}
            {quantity >1 &&( 
              <button onClick={()=>dispatch(decrease(data))}>-</button>
            )}
            {!!quantity && <span>{quantity}</span>}
            {quantity === 0 ? (
              <button onClick={()=>dispatch(addItem(data))}><TbShoppingBagCheck/></button>
            ) : (
              <button onClick={()=>dispatch(increase(data))}>+</button>
            )}
        </div>
    </div>
  )
} 

export default Card