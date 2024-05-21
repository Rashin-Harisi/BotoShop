/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/cinfig";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({children}) => {
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        const fetchProducts= async()=>{
            try {
                setProducts(await api.get("/products"))
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts();
    },[])
  return (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
  )
}
const useProducts= ()=>{
    const products = useContext(ProductContext)
    return products;
}
const useProductDetails = id =>{
    const products = useContext(ProductContext);
    const result= products.find(product=>product.id ===id)
    return result
}

export default ProductProvider

export {useProducts,useProductDetails}