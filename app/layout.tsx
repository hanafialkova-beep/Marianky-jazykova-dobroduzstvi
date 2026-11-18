import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mariančina jazyková dobrodružství 📚",
  description: "Interaktivní výuková aplikace pro procvičování českého pravopisu pro 3. třídu ZŠ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
