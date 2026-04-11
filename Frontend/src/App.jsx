import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import { ProductProvider } from "./context/ProductContext";
import { ToastContainer } from 'react-toastify';



export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
          <Navbar />
          <ToastContainer position="top-right" autoClose={3000} />
          <main className="pm-container py-8">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
}
