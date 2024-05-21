import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";
import PageNotFound from "./pages/404";
import Layouts from "./layouts/Layouts";
//import ProductProvider from "./context/ProductContext";
//import CartProvider from "./context/CartContext";

function App() {
  return (
    //<CartProvider>
     // <ProductProvider>
        <Layouts>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layouts>
      //</ProductProvider>
    //</CartProvider>
  );
}

export default App;
