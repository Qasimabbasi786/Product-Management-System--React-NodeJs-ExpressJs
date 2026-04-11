import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function EditProduct() {
  const { id } = useParams();
  const { products, updateProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const product = products.find((p) => p.id == id);

    
    if (product) {
      setForm({
        title: product.title,
        price: product.price,
        description: product.description,
        image: "" || product?.category?.image || product?.images?.[0],
      });
    }
  }, [id, products]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = products.find((p) => p.id == id);

    updateProduct(id, {
      title: form.title,
      price: Number(form.price),
      description: form.description,
      categoryId: 1,
      images: form.image
        ? [form.image]
        : product.images?.length
        ? product.images
        : product.category?.image
        ? [product.category.image]
        : ["https://picsum.photos/400/300"],
    });

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="pm-card mx-auto max-w-lg space-y-5 p-6 sm:p-8"
    >
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">
        Edit Product
      </h2>

      <div className="space-y-4">
        <input
          className="pm-input"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        />
        <input
          className="pm-input"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Price"
        />
        <textarea
          className="pm-input min-h-28 resize-y"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Description"
        />
        <input
          className="pm-input"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          placeholder="Image URL"
        />
      </div>

      <button className="pm-btn pm-btn-success w-full sm:w-auto">
        Update Product
      </button>
    </form>
  );
}
