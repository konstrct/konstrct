import Sidebar from '@/components/Sidebar'
import Card from '@/components/Card'
import { products } from '@/lib/mock'

export default function AdminPage(){
  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-4">
      <Sidebar />
      <main className="grid gap-4">
        <Card title="Pending Product Approvals">
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>Ready Mix M20 • ₹5200</div><button className="px-3 py-1.5 rounded-xl border border-emerald-700 text-emerald-300">Approve</button>
            </div>
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>LED Flood Light • ₹1499</div><button className="px-3 py-1.5 rounded-xl border border-emerald-700 text-emerald-300">Approve</button>
            </div>
          </div>
        </Card>
        <Card title="Live Products" subtitle={`Total ${products.length}`}>
          <div className="space-y-2">
            {products.map(p => (
              <div key={p.id} className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                <div>{p.name} • {p.brand}</div><button className="px-3 py-1.5 rounded-xl border border-slate-700">Remove</button>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
