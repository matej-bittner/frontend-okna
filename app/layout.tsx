import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alfredo s.r.o.",
  description:
    "Výroba a montáž oken s dodáním do měsíce. Snížení tepelných úniků, lepší osvětlení prostoru nebo výměna oken? Jsme tu pro vás!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={lexend.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
