import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">KONSTRCT – Building Made Easy</h1>
      <p className="mb-8 text-lg text-gray-600 max-w-xl">
        Buy construction materials & hire trusted service providers in one place.
      </p>
      <div className="flex gap-4">
        <Link href="/products" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Shop Products</Link>
        <Link href="/services" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">Hire Services</Link>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold mb-2">🛒 Wide Range</h3>
          <p>All building products at one place.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold mb-2">👷 Trusted Providers</h3>
          <p>Verified and skilled professionals.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold mb-2">⚡ Easy Booking</h3>
          <p>Book services & order products instantly.</p>
        </div>
      </section>
      <footer className="mt-20 text-gray-500">Powered by KONSTRCT © 2025</footer>
    </main>
  );
}