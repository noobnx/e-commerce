import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';

const quicksand = Quicksand({
   subsets: ['vietnamese'],
   weight: ['300', '700'],
});

export const metadata: Metadata = {
   title: 'Next App',
   description: 'Learn project mini e-commerce for youtube',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={quicksand.className}>
            <Toaster />
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <Header />
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
