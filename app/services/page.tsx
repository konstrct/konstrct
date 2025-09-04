export default function Services() {
  const services = ['Plumber', 'Electrician', 'Mason', 'Labour', 'Carpenter', 'Painter', 'Welder', 'Tiles Mason']
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((srv) => (
          <div key={srv} className="bg-white shadow p-4 rounded-lg">
            <h3 className="font-semibold">{srv}</h3>
            <p className="text-sm text-gray-600">Book a {srv}</p>
            <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}
