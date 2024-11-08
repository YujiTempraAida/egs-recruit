// layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EGS Recruit",
  description: "Join East Geek Smash - where gaming meets live production expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        style={{
          fontFamily: "NotoSansCJKjp, sans-serif",
          backgroundColor: "#1A1A1A", // ダークテーマでスタイリッシュに
          color: "#EAEAEA",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
 
        
        {/* Main Content */}
        <main style={{ width: "100%", maxWidth: "800px", padding: "2rem" }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ padding: "1rem 0", borderTop: "1px solid #333", width: "100%", textAlign: "center", fontSize: "0.8rem", color: "#777" }}>
          © 2024 East Geek Smash. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
