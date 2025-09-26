import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BDS – Step Into the World of Dentistry with Clinical Confidence | JKKN",
  description: "Join JKKN's 5-year BDS program with clinical training, 200+ chair dental hospital, and 92% placement rate. NEET-qualified students welcome. Apply now!",
  keywords: "BDS, Bachelor of Dental Surgery, Dental College, NEET, Tamil Nadu, Dental Education, Clinical Training, Dental Hospital",
  authors: [{ name: "JKKN Dental College" }],
  openGraph: {
    title: "BDS – Step Into the World of Dentistry with Clinical Confidence",
    description: "Join JKKN's 5-year BDS program with clinical training and 92% placement rate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
