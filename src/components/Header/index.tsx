'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Logo } from '../Logo';
import { useMemo } from 'react';
import { getExp } from '@/helpers/exp.helper';

export function Header() {
  const { exp } = useParams();

  const expClub = useMemo(() => getExp(exp as string), [exp]);

  return (
    <Link href="/">
      <Logo exp={expClub} className="max-w-60" />
    </Link>
  );
}
