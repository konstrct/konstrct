import Sidebar from '@/components/Sidebar'
import Card from '@/components/Card'

export default function ProviderPage(){
  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-4">
      <Sidebar />
      <main className="grid gap-4">
        <Card title="Profile & KYC" subtitle="Complete verification to receive bookings">
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>Name: Rahul Yadav</div><button className="px-3 py-1.5 rounded-xl border border-slate-700">Edit</button>
            </div>
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>Trade: Plumber</div><button className="px-3 py-1.5 rounded-xl border border-slate-700">Edit</button>
            </div>
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>KYC: <span className="text-slate-300">Not uploaded</span></div><button className="px-3 py-1.5 rounded-xl border border-slate-700">Upload</button>
            </div>
          </div>
        </Card>
        <Card title="Services Offered">
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>Leaky pipe repair — ₹350/hr</div><button className="px-3 py-1.5 rounded-xl border border-slate-700">Remove</button>
            </div>
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>Bathroom pipe replacement — ₹1500/job</div><button className="px-3 py-1.5 rounded-xl border border-slate-700">Remove</button>
            </div>
          </div>
        </Card>
        <Card title="Bookings">
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>Rajesh • 01 Sep • 9:00 • 3h</div><button className="px-3 py-1.5 rounded-xl border border-emerald-700 text-emerald-300">Confirm</button>
            </div>
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <div>Sonal • 29 Aug • 14:00 • 2h</div><button className="px-3 py-1.5 rounded-xl border border-slate-700">Details</button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
