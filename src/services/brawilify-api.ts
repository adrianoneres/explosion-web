const API_URL = process.env.NEXT_PUBLIC_BRAWLIFY_URL;

export type GetIconsResponse = {
  club: {
    [key: number]: {
      id: number;
      imageUrl: string;
    };
  };
  player: {
    [key: number]: {
      id: number;
      brawler: number;
      imageUrl: string;
      imageUrl2: string;
      isAvailableForOffers: boolean;
      isReward: false;
      name: string;
      nam2: string;
      requiredTotalTrophies: number;
      sortOrder: number;
    };
  };
};

export async function getIcons(): Promise<GetIconsResponse> {
  const url = `${API_URL}/icons`;

  const response = await fetch(url);

  return response.json();
}
