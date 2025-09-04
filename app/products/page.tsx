'use client';
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("products").select("*");
      if (error) console.error(error);
      else setProducts(data || []);
    }
    fetchProducts();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="p-4 bg-white rounded-lg shadow">
            <img src={p.image_url} alt={p.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{p.name}</h2>
            <p className="text-gray-600">₹{p.price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}