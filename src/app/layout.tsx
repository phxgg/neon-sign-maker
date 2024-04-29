import type { Metadata } from 'next';

import './globals.css';

import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';

import { adventPro, capriola, dancingScript, fontSans } from './fonts';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          capriola.variable,
          adventPro.variable,
          dancingScript.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
