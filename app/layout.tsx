import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/modules/navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/common/layouts/ChangeTheme";
import DisableScroll from "@/common/elements/DisbleScroll";
import Footer from "@/modules/footer";
import { METADATA } from "@/common/constant/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  metadataBase: new URL("https://maulana-v3.vercel.app"),
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
  icons: {
    icon: METADATA.icons.icon,
    shortcut: METADATA.icons.shortcut,
    apple: METADATA.icons.apple,
    other: {
      rel: METADATA.icons.other.rel,
      url: METADATA.icons.other.url,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <DisableScroll />
          <ModeToggle />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
