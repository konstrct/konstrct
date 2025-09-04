import Link from 'next/link'

const LinkItem = ({href, text}:{href:string, text:string}) => (
  <Link href={href} className="block px-3 py-2 rounded-xl hover:bg-slate-800 border border-transparent hover:border-slate-800">{text}</Link>
)

export default function Sidebar(){
  return (
    <aside className="bg-slate-900 border border-slate-800 rounded-2xl p-3 h-min sticky top-[70px]">
      <div className="text-xs uppercase tracking-wide text-slate-400 px-2">Main</div>
      <div className="mt-1 grid gap-1">
        <LinkItem href="/" text="Dashboard" />
        <LinkItem href="/products" text="Products" />
        <LinkItem href="/services" text="Services" />
        <LinkItem href="/provider" text="Provider" />
        <LinkItem href="/admin" text="Admin" />
      </div>
      <div className="mt-4 text-xs uppercase tracking-wide text-slate-400 px-2">Categories</div>
      <div className="mt-1 grid gap-1">
        {['Cement & Concrete','Steel & Metal','Bricks & Blocks','Tiles & Flooring','Electricals','Plumbing & Sanitary','Paints & Finishes','Tools & Hardware'].map(c =>
          <div key={c} className="px-3 py-2 rounded-xl bg-slate-950/40 border border-slate-800 text-slate-300">{c}</div>
        )}
      </div>
    </aside>
  )
}
