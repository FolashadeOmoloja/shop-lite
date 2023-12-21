import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopLite',
  description: 'An ecormmerce marketplace for small business owners to sell their goods and potential customers to find quality products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn('font-sans relative h-full antialiased`', inter.className )}>
       <main className='flex flex-col min-h-screen relative'>
           <div className='flex-grow flex-1'> {children}</div>
       </main>
      </body>
    </html>
  )
}
