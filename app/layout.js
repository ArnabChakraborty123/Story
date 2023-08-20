
import "./globals.css";
import { Inter } from 'next/font/google'
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Birthday_Gift',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Badge variant="outline"> Created by Arnab  <span style={{ fontSize: '0.8em' }}>Hosted by Arghya</span></Badge>
      </body>
    </html>
  )
}