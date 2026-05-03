import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lokman Hossen",
  description: "Modern animated portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* ❗ body te bg remove kore disi */}
      <body className="min-h-full flex flex-col text-white selection:bg-violet-500/30">


        {/* Main Content */}
        <main className="relative z-10 flex-1">
          <ToastContainer />
          {children}
        </main>

      </body>
    </html>
  );
}