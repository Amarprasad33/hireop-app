import type { Metadata } from 'next';
// import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google';
import './globals.css';
import  Navbar  from './components/Navbar';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700', '900'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Hireop Platform',
  description: 'Made by Amar Prasad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
