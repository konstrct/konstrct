'use client'
import Sidebar from '@/components/Sidebar'
import { providers } from '@/lib/mock'
import { useMemo, useState } from 'react'

export default function ServicesPage(){
  const [q, setQ] = useState('')
  const [trade, setTrade] = useState('All')
  const filtered = useMemo(()=>providers.filter(p =>
    (trade==='All' || p.trade===trade) &&
    (p.name.toLowerCase().includes(q.toLowerCase()) || p.trade.toLowerCase().includes(q.toLowerCase()))
  ),[q, trade])

  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-4">
      <Sidebar />
      <main>
        <div className="flex flex-wrap gap-2 items-center mb-3">
          <select value={trade} onChange={e=>setTrade(e.target.value)} className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
            {['All','Plumber','Electrician','Mason','Labour','Carpenter','Painter','Tiles Mason','Welder'].map(c=>(<option key={c}>{c}</option>))}
          </select>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search providers..." className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 flex-1 min-w-[240px]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map(pro => (
            <div key={pro.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <div className="font-semibold flex items-center gap-2">
                <span>{pro.name}</span>
                {pro.verified && <span className="text-emerald-400 text-xs">Verified</span>}
              </div>
              <div className="text-slate-400 text-sm">{pro.trade} • {pro.city}</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 text-center">⭐ {pro.rating.toFixed(1)}<div className="text-xs text-slate-400">{pro.jobs} jobs</div></div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 text-center">{pro.exp} yrs<div className="text-xs text-slate-400">experience</div></div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 text-center">₹{pro.rate}<div className="text-xs text-slate-400">{pro.rateUnit}</div></div>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-xl bg-brand text-slate-900 font-semibold py-2">Book</button>
                <button className="rounded-xl border border-slate-700 px-3">Get Quote</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
