import Sidebar from '@/components/Sidebar'
import Card from '@/components/Card'

export default function Page(){
  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-4">
      <Sidebar />
      <main className="grid gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="Quick Buy" subtitle="Popular building materials">
            <div className="flex flex-wrap gap-2">
              {['OPC 53','PPC Cement','TMT Fe500D','Clay Bricks','AAC Blocks','M-Sand'].map(t=>
                <span key={t} className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-sm">{t}</span>
              )}
            </div>
          </Card>
          <Card title="Book a Pro" subtitle="Top-rated nearby">
            <div className="space-y-2">
              {['Plumber • Rahul','Electrician • Maya','Mason • Shiv'].map((t,i)=>
                <div key={i} className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                  <div>{t}</div><button className="px-3 py-1.5 rounded-xl border border-slate-700">Book</button>
                </div>
              )}
            </div>
          </Card>
          <Card title="My Activity" subtitle="Recent orders & bookings">
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                <div>Order #1024 • Cement x 20 bags</div><span className="text-emerald-400 text-sm">Delivered</span>
              </div>
              <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                <div>Booking • Electrician • 3 Sept</div><span className="text-slate-300 text-sm">Pending</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
