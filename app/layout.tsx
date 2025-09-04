import './globals.css'
import Topbar from '@/components/Topbar'

export const metadata = {
  title: 'KONSTRCT',
  description: 'Homeowner construction marketplace & services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <div className="container py-4">{children}</div>
      </body>
    </html>
  )
}
