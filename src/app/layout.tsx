import Link from 'next/link';

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
      <div>{children}</div>
      <footer>footer</footer>
      </body>
    </html>
  );
}
