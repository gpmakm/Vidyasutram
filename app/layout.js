import { Inter } from "next/font/google";
import "./globals.css";
import VidyaSutramNavbar from "./VidyaSutramNavbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VidyaSutram", 
  description: "A platform for CSE students, studying in Diploma ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}><VidyaSutramNavbar/>{children}</body>
      {/* <Footer/> */}
    </html>
  );
}
