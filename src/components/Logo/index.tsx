import Image from 'next/image';

import { Exp } from '@/types/Exp';
import experienceLogo from '../../../public/experience-logo.png';
import explosionLogo from '../../../public/explosion-logo.png';

export type LogoProps = {
  exp?: Exp;
  className?: string;
};

export function Logo({ exp = Exp.Explosion, className }: LogoProps) {
  return (
    <Image
      src={exp === Exp.Experience ? experienceLogo : explosionLogo}
      alt="Logo"
      className={`mx-auto ${className}`}
      priority
    />
  );
}
