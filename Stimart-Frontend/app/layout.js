"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function RootLayout({ children }) {

  const [queryClient] = useState(() => new QueryClient()); // ✅ CORRECT way

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
            <Navbar/>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
