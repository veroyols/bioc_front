import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
  
 const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
 });

interface LayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children } : LayoutProps) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    )
}