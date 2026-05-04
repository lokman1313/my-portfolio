import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Lokman Hossen",
  description: "Modern animated portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-white font-inter">

        
          <main className="relative z-10 flex-1">
          <ToastContainer />
          {children}
        </main>
        

      </body>
    </html>
  );
}