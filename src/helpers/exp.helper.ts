import { Exp } from '@/types/Exp';

export function getExp(value: string) {
  if (value?.toLowerCase() === Exp.Experience) {
    return Exp.Experience;
  }

  return Exp.Explosion;
}
