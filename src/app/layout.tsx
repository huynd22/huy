import type { Metadata } from "next";
import { Konkhmer_Sleokchher } from "next/font/google";
import ClientBody from "./ClientBody";
import "./globals.css";
import localFont from "next/font/local";
const khmerFont = Konkhmer_Sleokchher({
  weight: "400",
  variable: "--font-khmer",
  subsets: ["latin"],
});

const laoManFont = localFont({
  src: "./fonts/LaoMuangDon-Regular.ttf",
  variable: "--font-lao-man",
});

export const metadata: Metadata = {
  title: "Golden Agency",
  description: "Golden Agency",
  icons: {
    icon: [
      {
        url: "/images/logo.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${khmerFont.variable} ${laoManFont.variable} font-khmer`}
    >
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
