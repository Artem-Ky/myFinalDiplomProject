import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/Header";

const robotoSlab = Roboto_Slab({
  subsets: ["cyrillic"],
  variable: "--font-robotoSlab",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "my pizza clone",
  description: "diplom project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} ${robotoSlab.variable} antialiased`}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
