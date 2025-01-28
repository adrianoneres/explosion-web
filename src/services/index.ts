const BS_API_AUTHORIZATION = `Bearer ${process.env.NEXT_PUBLIC_BS_API_KEY}`;

export async function getClub() {
  const url = `${process.env.NEXT_PUBLIC_BS_API_URL}/clubs/${process.env.NEXT_PUBLIC_BS_CLUB_TAG}`;

  const response = await fetch(url, {
    headers: {
      Authorization: BS_API_AUTHORIZATION,
    },
  });

  return response.json();
}

export async function getPlayer(tag: string) {
  const url = `${process.env.NEXT_PUBLIC_BS_API_URL}/players/${tag}`;

  const response = await fetch(url, {
    headers: {
      Authorization: BS_API_AUTHORIZATION,
    },
  });

  return response.json();
}
