import { Header } from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto my-8">
      <Header />
      <main className="mt-4">{children}</main>
    </div>
  );
}
