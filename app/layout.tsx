import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import favicon from "./favicon.ico";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "spltv.ink",
  description: "Splatoon stat site",
};

function TopBar() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.logo} href="/">
              <Image
                width="50"
                height="50"
                src={favicon}
                alt="logo"
              />
          </Link>
          <ul className={styles.navLinks}>
              <li><Link href="/matches">Matches</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li>Spoilers Toggle</li>
              <li>Log In</li>
          </ul>
        </nav>
      </header>
    )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar/>
      <html lang="en" className={`${notoSans.className} ${notoSans.variable}`}>
        <body>{children}</body>
      </html>
    </>
  );
}
