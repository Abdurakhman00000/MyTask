"use client"
import localFont from "next/font/local";
import "./globals.scss";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
const interSans = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-sans",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable}  antialiased`}
      >
        <Provider store={store}>
          {children}
          <ToastContainer />	
        </Provider>
      </body>
    </html>
  );
}
