import {  useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import styles from "./CheckOut.module.css"
import { useEffect, useState } from "react";


const CheckOut = () => {
 const state= useSelector(store=>store.cart)
 const [cart,setCart]= useState({})
  console.log(cart)

 useEffect(()=>{
  const cart = JSON.parse(localStorage.getItem("cart"));
  setCart(cart)
 },[state])

   if(!cart.itemsCounter){
    return(
    <div className={styles.container}>
      <p>Empty</p>
    </div>
  )}
  
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {cart.selectedItems.map((item) => (
          <BasketCard data={item} key={item.id}  />
        ))}
      </div>
      
    </div>
  );
};

export default CheckOut;
