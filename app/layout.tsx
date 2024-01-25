import '@/app/ui/global.css';
import { archivo } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${archivo.className} font-medium`}>{children}</body>
    </html>
  );
}
