import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id == id);

  if (!product)
    return (
      <p className="mt-10 text-center text-sm text-slate-600">
        Product not found
      </p>
    );

  return (
    <div className="pm-card mx-auto max-w-3xl overflow-hidden">
      <div className="grid gap-6 p-6 sm:grid-cols-2 sm:items-start">
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={
              product.category?.image ||
              product.images?.[0] ||
              "https://picsum.photos/400/300"
            }
            alt={product?.title || "Product"}
            className="h-72 w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {product.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
          <p className="mt-4 inline-flex items-center rounded-xl bg-emerald-50 px-3 py-2 text-lg font-bold text-emerald-700">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
