import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSclice"
import cartReducer from "../features/cart/cartSlice"

import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
    key: 'cart',
    version: 1,
    storage, 
  };

const persistedReducer = persistReducer(persistConfig, cartReducer);


const store = configureStore({
    reducer: {
        product: productReducer,
        cart: persistedReducer,
    }
})

export default store;