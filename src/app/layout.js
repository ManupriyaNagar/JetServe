import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FlyOla Aviation Academy",
  keywords: [
    "FlyOla",
    "Aviation Academy",
    "Flight Training",
    "Pilot School",
    "Aviation Courses",
    "Pilot Training",
    "Commercial Pilot License",
    "Private Pilot License",
    "Commercial Helicopter Pilot License",
    "Cadet Pilot Programme",
    "DGCA Approved",
  ],
  authors: [
    {
      name: "FlyOla Team",
      url: "https://www.myflyola.com",
    },
  ],
  creator: "FlyOla Team",
  description: "FlyOla Aviation Academy, a unit of Jet Serve Aviation Pvt. Ltd., offers DGCA-approved pilot training with modern aircraft like King Air C-90 & B-200. Enroll today to chase your dream of flying with world-class courses and up to ₹10 Lakh scholarships.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/JSA.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}