'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider> 
  )
}
