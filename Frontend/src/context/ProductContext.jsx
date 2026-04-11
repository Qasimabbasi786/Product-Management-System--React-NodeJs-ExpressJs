import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const API = "http://localhost:5000/products";

  const fetchProducts = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      
      if (res.ok) {
        console.log(data);
        
        setProducts(data);

        
        toast.success("Product Fetching Successfully!");
      } else {
        toast.error("Something went wrong, products will not be fetched.");
      }
  } catch (err) {
    console.error(err);
    toast.error("Server connection failed...!");
  } 
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
  try {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (res.ok) {
      const newProduct = {
        id: Date.now(), // fake id (important)
        title: product.title,
        price: product.price,
        description: product.description,
        images: product.images,
        category: { image: product.images[0] },
      };


      // 🔥 IMPORTANT: local state update
      setProducts((prev) => [newProduct, ...prev]);

      toast.success("Product Added Successfully!");
    } else {
      toast.error("Something went wrong, product will not be added.");
    }

  } catch (err) {
    console.error(err);
    toast.error("Server connection failed...!");
  } 
};

  const updateProduct = async (id, updated) => {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    if (res.ok) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id == id
            ? {
                ...p,
                ...updated,
                category: { image: updated.images?.[0] },
              }
            : p
        )
      );

        toast.success("Product Updated Successfully!");
    } else {
      toast.error("Something went wrong, Product will not be updated.");
    }

  } catch (err) {
    console.error(err);
    toast.error("Server connection failed...!");
  } 
};

  const deleteProduct = async (id) => {
    try {
        if (!confirm("Delete product?")) return;
        await fetch(`${API}/${id}`, { method: "DELETE" });
        setProducts(products.filter((p) => p.id !== id));

        
          toast.success("Product Deleted Successfully!");

      } catch (err) {
        console.error(err);
        toast.error("Something went wrong, product will not be deleted.");
      } 
  };

  const filtered = products.filter((p) =>
    p?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ProductContext.Provider
      value={{ products: filtered, search, setSearch, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
