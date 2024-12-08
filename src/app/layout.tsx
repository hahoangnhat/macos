import type { Metadata } from 'next'
import '@/assets/styles/globals.css'

export const metadata: Metadata = {
  title: 'MacOS',
  description: 'My simple MacOS',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return children
}

export default RootLayout
