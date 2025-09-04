'use client';
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase.from("services").select("*");
      if (error) console.error(error);
      else setServices(data || []);
    }
    fetchServices();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">{s.name}</h2>
            <p className="text-gray-600">{s.description}</p>
            <p className="text-gray-800 font-bold mt-2">₹{s.rate}</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}