import { Exp } from '@/types/Exp';

const API_URL = process.env.NEXT_PUBLIC_BS_API_URL;
const AUTHORIZATION = `Bearer ${process.env.NEXT_PUBLIC_BS_API_KEY}`;

export async function getClub(exp: Exp) {
  const clubTag =
    exp === Exp.Experience
      ? process.env.NEXT_PUBLIC_EXPERIENCE_CLUB_TAG
      : process.env.NEXT_PUBLIC_EXPLOSION_CLUB_TAG;

  const url = `${API_URL}/clubs/${clubTag}`;

  const response = await fetch(url, {
    headers: {
      Authorization: AUTHORIZATION,
    },
  });

  return response.json();
}

export async function getPlayer(tag: string) {
  const url = `${process.env.NEXT_PUBLIC_BS_API_URL}/players/${tag}`;

  const response = await fetch(url, {
    headers: {
      Authorization: AUTHORIZATION,
    },
  });

  return response.json();
}
