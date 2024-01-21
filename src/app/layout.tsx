import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <UserProvider>
        <body className={`${inter.className} h-full grid grid-rows-layout`}>
          <Navbar />
          <main className="p-2.5">
            {children}
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
