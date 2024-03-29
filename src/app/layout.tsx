import Link from 'next/link';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header>
          <Link href='/'>Главная</Link>
          <Link href='/restaurants'>Рестораны</Link>
      </header>
      <main className='container'>{children}</main>
      <footer>footer</footer>
      </body>
    </html>
  );
}
