'use client'
import Sidebar from '@/components/Sidebar'
import { products } from '@/lib/mock'
import { useMemo, useState } from 'react'

export default function ProductsPage(){
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const filtered = useMemo(()=>products.filter(p =>
    (cat==='All' || p.category===cat) &&
    (p.name.toLowerCase().includes(q.toLowerCase()) || p.brand.toLowerCase().includes(q.toLowerCase()))
  ),[q, cat])

  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-4">
      <Sidebar />
      <main>
        <div className="flex flex-wrap gap-2 items-center mb-3">
          <select value={cat} onChange={e=>setCat(e.target.value)} className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
            {['All','Cement & Concrete','Steel & Metal','Bricks & Blocks','Plumbing & Sanitary','Paints & Finishes','Electricals','Tools & Hardware'].map(c=>(<option key={c}>{c}</option>))}
          </select>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products..." className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 flex-1 min-w-[240px]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map(p => (
            <div key={p.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <div className="font-semibold">{p.name}</div>
              <div className="text-slate-400 text-sm">{p.brand} • {p.category}</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 text-center">₹{p.price} <div className="text-xs text-slate-400">per {p.unit}</div></div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 text-center">{p.stock} <div className="text-xs text-slate-400">in stock</div></div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 text-center">{p.leadTime}d <div className="text-xs text-slate-400">lead</div></div>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-xl bg-brand text-slate-900 font-semibold py-2">Add</button>
                <button className="rounded-xl border border-slate-700 px-3">Bulk RFQ</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
