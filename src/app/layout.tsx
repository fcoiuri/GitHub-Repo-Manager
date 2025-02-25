import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import MobileNavBar from '@/components/MobileNavBar';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Repositórios GitHub',
  description:
    'Neste projeto, é desenvolvido um site simples que permite acessar a página de um usuário do GitHub, visualizar seus repositórios públicos e gerenciar repositórios favoritos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} flex flex-col min-h-screen`}>
        <NavBar />
        <MobileNavBar />
        <main className="flex flex-1 pb-20 lg:pb-0">{children}</main>
      </body>
    </html>
  );
}
