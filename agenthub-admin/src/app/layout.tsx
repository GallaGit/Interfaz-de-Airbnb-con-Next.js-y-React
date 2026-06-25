import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Airbnb Clone UI",
  description: "Partial Airbnb clone with Next.js App Router",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-foreground">
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-5 pb-24 sm:px-6 sm:py-6 lg:px-8 lg:pb-6">
          {children}
        </main>
        <MobileBottomNav />
      </body>
    </html>
  );
};

export default RootLayout;
