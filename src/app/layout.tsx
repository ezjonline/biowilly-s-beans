import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Bio Willy's Beans | Boutique Coffee Roaster Seattle",
  description: "Bio Willy's Beans is an independent coffee roaster based in Seattle, crafting exceptional small-batch beans for the discerning coffee lover.",
  keywords: ["coffee", "roaster", "seattle", "boutique", "bio willy", "craft coffee"],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
