import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600']})

//components
import Navbar from './navbar'

export const metadata = {
  title: 'Dashboard ',
  description: 'O melhor dashboard do mundo',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />

      {children}
    </section>
  )
}
