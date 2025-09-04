import { ReactNode } from 'react'
export default function Card({title, subtitle, children}:{title:string, subtitle?:string, children:ReactNode}){
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      {subtitle && <div className="text-slate-400 text-sm">{subtitle}</div>}
      <div className="mt-3">{children}</div>
    </div>
  )
}
