import {  useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import styles from "./CheckOut.module.css"




const CheckOut = () => {
 const state= useSelector(store=>store.cart)

   if(!state.itemsCounter){
    return(
    <div className={styles.container}>
      <p>Empty</p>
    </div>
  )}
  
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((item) => (
          <BasketCard data={item} key={item.id}  />
        ))}
      </div>
      
    </div>
  );
};

export default CheckOut;
