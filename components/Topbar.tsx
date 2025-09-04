'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Topbar(){
  const [q, setQ] = useState('')
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="container py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-wide">
          <span className="inline-grid place-items-center w-7 h-7 rounded-lg bg-brand text-slate-900">K</span>
          <span>KONSTRCT</span>
        </Link>
        <input
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          placeholder="Search products, services..."
          className="ml-4 flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 outline-none"
        />
        <Link href="/cart" className="rounded-xl border border-slate-700 px-3 py-1.5 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" /> Cart
        </Link>
      </div>
    </header>
  )
}
