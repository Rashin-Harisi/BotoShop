/* eslint-disable react/prop-types */

import { MdDeleteOutline } from "react-icons/md"
import { shortenTex } from "../helpers/helper"
import styles from "./BasketCard.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";




const BasketCard = ({data}) => {

  const {image, title, quantity} = data;
  const dispatch= useDispatch();
  
  
   
  return (
    <div className={styles.card}>
        <img src={image} alt={data.title}/>
        <p>{shortenTex(title)}</p>
        <span>{data.price} $</span>
        <div className={styles.actions}>
            {quantity === 1 && (<button onClick={()=>dispatch(removeItem(data))}><MdDeleteOutline/></button>)}
            {quantity > 1 && (<button onClick={()=>dispatch(decrease(data))}>-</button>)}
            <span>{quantity}</span>
            <button onClick={()=>dispatch(increase(data))}>+</button>
        </div>
    </div>
  )
}

export default BasketCard