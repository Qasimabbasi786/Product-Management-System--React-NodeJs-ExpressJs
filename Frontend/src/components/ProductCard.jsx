import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ProductCard({ product }) {
  const { deleteProduct } = useContext(ProductContext);

  return (
    <div className="pm-card pm-card-hover group p-4">
      <div className="overflow-hidden rounded-xl bg-slate-100">
        <img
          src={
            product?.category?.image ||
            product.images?.[0] ||
            "https://source.unsplash.com/400x300/?product"
          }
          alt={product?.title || "Product"}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="mt-3">
        <h2 className="text-sm font-semibold leading-5 text-slate-900">
          {product.title}
        </h2>
        <p className="mt-1 text-emerald-600 font-bold">${product.price}</p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <Link
          to={`/product/${product.id}`}
          className="pm-action text-indigo-700 hover:text-indigo-800"
        >
          View
        </Link>
        <Link
          to={`/edit/${product.id}`}
          className="pm-action text-amber-700 hover:text-amber-800"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteProduct(product.id)}
          className="pm-action text-rose-700 hover:text-rose-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
