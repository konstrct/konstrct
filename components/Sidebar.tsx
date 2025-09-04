import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">KONSTRCT</h1>
      <nav className="space-y-4">
        <Link href="/">🏠 Home</Link>
        <Link href="/products">🛒 Products</Link>
        <Link href="/services">🛠 Services</Link>
        <Link href="/cart">🧾 Cart</Link>
        <Link href="/dashboard">📊 Dashboard</Link>
      </nav>
    </div>
  )
}

export default Sidebar
