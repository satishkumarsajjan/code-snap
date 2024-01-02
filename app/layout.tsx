import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navbar } from '@/components/navbar/Navbar';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeSnap',
  description: 'Create and share your code snippets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative h-screen '>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
