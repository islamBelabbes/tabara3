import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  preload: false,
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "تبرع",
  description: "تبرع بمبلغ مالي لحماية البيئة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tajawal.className}>
        <Providers>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
