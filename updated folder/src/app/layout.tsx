import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import ServiceProvider from '@/app/components/ServiceProvider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Money Mind",
  description: "AI-Powered Money Mind designed for personal and business use",
  icons: {
    icon: '/moneyMindLogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ServiceProvider>
          {children}
        </ServiceProvider>
      </body>
    </html>
  );
}
