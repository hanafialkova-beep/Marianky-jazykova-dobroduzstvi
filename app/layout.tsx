import "./globals.css";
import { MacalySandboxBridge } from '../.sandbox/sandbox-bridge';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mariančina jazyková dobrodružství 📚",
  description: "Interaktivní výuková aplikace pro procvičování českého pravopisu — 3. třída ZŠ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <MacalySandboxBridge><body suppressHydrationWarning={true}>
        {children}
      </body></MacalySandboxBridge>
    </html>
  );
}
