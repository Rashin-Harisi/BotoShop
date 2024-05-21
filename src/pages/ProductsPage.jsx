/* eslint-disable react/no-unescaped-entities */


import { ColorRing } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import { fetchProducts } from "../features/product/productSclice";
import Card from "../components/Card";
import styles from "./ProductsPage.module.css";
import {  filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

const ProductsPage = () => {
  const dispatch= useDispatch();
  const {products, loading} =useSelector(store=>store.product)
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery]= useState({});
  const [searchParams, setSearchParams] = useSearchParams()


  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  useEffect(()=>{
    setDisplayed(products)
    setQuery(getInitialQuery(searchParams))
  },[products])


  useEffect(()=>{
    setSearchParams(query)
    setSearch(query.search || "")
    let finalProducts= searchProducts(products,query.search)
    finalProducts= filterProducts(finalProducts,query.category)
    setDisplayed(finalProducts)
  },[query])

  
  
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
      <div className={styles.container}>
        {loading? (
          <p className={styles.loader}>
            <ColorRing height="100" width="100" />
          </p>
        ) : (
          <div className={styles.products}>
            {displayed.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        )}
      <Sidebar query={query} setQuery={setQuery}/>
      </div>
    </>
  );
};

export default ProductsPage;
