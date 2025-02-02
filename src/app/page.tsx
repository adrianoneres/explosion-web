'use client';

import Link from 'next/link';

import { Logo } from '@/components/Logo';
import { Exp } from '@/types/Exp';
import { Container } from '@/components/Container';

export default function Home() {
  return (
    <div className="flex min-h-[100vh]">
      <Container className="mx-auto my-auto">
        <section className="mx-auto flex min-h-full max-w-[800px] flex-col gap-8">
          <h1 className="mx-auto text-4xl">Seja bem-vindo à aliança EXP!</h1>
          <p className="mx-auto text-center">
            A <span className="font-bold">Aliança EXP</span> é formada pelos clubes{' '}
            <span className="font-bold">Explosion 🌋</span> e{' '}
            <span className="font-bold">Experience ⚡️</span>.
          </p>
          <div className="flex flex-col gap-16">
            <div className="mx-auto max-w-60 transition duration-200 hover:scale-125">
              <Link href="/clubs/explosion">
                <Logo exp={Exp.Explosion} className="max-w-60" />
              </Link>
            </div>
            <div className="mx-auto max-w-60 transition duration-200 hover:scale-125">
              <Link href="/clubs/experience">
                <Logo exp={Exp.Experience} className="max-w-60" />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
