import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Providers } from "./providers";

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
    <html lang="en"
    suppressHydrationWarning
    className={`${inter.variable} h-full antialiased`}>
      <body className="bg-background text-foreground font-inter">

        
          <main className="relative z-10 flex-1">
            <Providers>
          <ToastContainer />
          {children}
          </Providers>
        </main>
        

      </body>
    </html>
  );
}