import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ciudad Digital - Guia Comercial',
  description: 'Guia comercial y turistica digital para comercios locales.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
