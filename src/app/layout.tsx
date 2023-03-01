import './globals.css'

export const metadata = {
  title: 'Dashboard Next',
  description: 'O melhor dashboard do mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
