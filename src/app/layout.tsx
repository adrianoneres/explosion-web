import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

import logo from '../../public/logo.png';
import "./globals.css";

export const metadata: Metadata = {
  title: "Explosion",
  description: "Os melhores!",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nougat = localFont({
  src: [
    {
      path: '../../public/Nougat-ExtraBlack.ttf',
      weight: '700'
    }
  ],
  variable: '--font-nougat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nougat.variable} font-sansantialiased min-h-screen bg-gradient-to-b from-amber-300 to-amber-500`}
      >
        <div className="my-8 mx-auto px-8">
          <Link href="/club" prefetch={false}>
            <Image 
              src={logo} 
              alt="Explosion logo" 
              className="mx-auto md:max-w-96 max-w-60" 
              priority 
            />
          </Link>
          <main className="mt-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
