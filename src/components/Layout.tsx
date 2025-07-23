// components/Layout.tsx
import { DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${DMSans.variable} antialiased`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
