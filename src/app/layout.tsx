import { Audiowide, Michroma } from 'next/font/google';
import './globals.css';

const michroma = Michroma({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-michroma',
});

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${michroma.variable} ${audiowide.variable}`}>
      <body className="bg-neutral-900 text-neutral-100">
        {children}
      </body>
    </html>
  );
}
