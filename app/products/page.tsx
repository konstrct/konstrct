export default function Products() {
  const categories = ['Cement', 'Steel', 'Bricks', 'Tiles', 'Paints', 'Electricals', 'Plumbing', 'Tools']
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat} className="bg-white shadow p-4 rounded-lg">
            <h3 className="font-semibold">{cat}</h3>
            <p className="text-sm text-gray-600">Explore {cat}</p>
            <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">View</button>
          </div>
        ))}
      </div>
    </div>
  )
}
