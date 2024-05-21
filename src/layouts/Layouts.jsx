/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Layouts.module.css";
import { PiShoppingCartBold } from "react-icons/pi";
import { useSelector } from "react-redux";


const Layouts = ({ children }) => {
 
  const state= useSelector(store=>store.cart)
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Botoshop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        <p>
          {" "}
          Written by{" "}
          <a href="https://github.com/Rashin-Harisi">Rashin Harisi</a>
        </p>
      </footer>
    </>
  );
};

export default Layouts;
