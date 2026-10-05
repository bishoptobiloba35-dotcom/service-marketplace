import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scout | Hire trusted pros',
  description: 'A marketplace for skilled trades and trusted local services with escrow-backed hiring.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
