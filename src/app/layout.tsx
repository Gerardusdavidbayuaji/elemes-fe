import type { Metadata } from "next";
import Layouts from "@/components/layout";
import { Rubik } from "next/font/google";
import "@/styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Elemes.id",
  description: "Welcome to elemes.id, good food us good mood",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
