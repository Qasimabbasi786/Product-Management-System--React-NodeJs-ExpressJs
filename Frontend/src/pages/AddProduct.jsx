import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddProduct() {
 const [form, setForm] = useState({
  title: "",
  price: "",
  description: "",
  image: ""
});
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.description || !form.image) {
      toast.warning("Please fill all fields");
      // alert("Please fill all fields");
      return;
    }

    addProduct({
      title: form.title,
      price: Number(form.price),
      description: form.description,
      categoryId: 1,
      images: [
      form.image.startsWith("https")
        ? form.image
        : "https://picsum.photos/400/300",
      ],
    });

     navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="pm-card mx-auto max-w-lg space-y-5 p-6 sm:p-8"
    >
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">
        Add Product
      </h2>

      <div className="space-y-4">
        <input
          className="pm-input"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="pm-input"
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <textarea
          className="pm-input min-h-28 resize-y"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="pm-input"
          placeholder="Image URL"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
      </div>

      <button className="pm-btn pm-btn-primary w-full sm:w-auto">
        Add Product
      </button>
    </form>
  );
}
