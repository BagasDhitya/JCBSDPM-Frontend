import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "KopiKita - Freshly Brewed Coffee Everyday",
  description: "KopiKita is your cozy corner for freshly brewed coffe. Explore our handcrafted blends, made with love from the finest Indonesian beans",
  keywords: ['KopiKita', 'coffee shop', 'Indonesian coffee', 'artisan coffee', 'coffe beans', 'latte', 'espresso']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
