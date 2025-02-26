import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rise Of Fearless - Investors",
  description: "Rise Of Fearless - Investors",
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
        {children}
        <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                className: ' toast',
                 style: {
                   border: '1px solid #27272a',
                   padding: '16px',
                   color: ' white',
                   backgroundColor: '#000000',
                   fontSize: '.8rem'
                 },
                 success: {
                  style: {
                    
                  },
                },
              }}
              
            />
      </body>
    </html>
  );
}
