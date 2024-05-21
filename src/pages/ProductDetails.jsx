import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./ProductDetails.module.css";
import { fetchProducts } from "../features/product/productSclice";




const ProductDetails = () => {
  const { id } = useParams();
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const productDetails = useSelector(store => store.product.products.find(item=>item.id === +id))
  if (!productDetails)
    return (
      <p className={{ margin: "auto" }}>
        <ColorRing height="100" width="100" />
      </p>
    );
  //console.log(productDetails)
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft /> 
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
