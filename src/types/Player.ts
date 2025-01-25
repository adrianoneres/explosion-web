export type Player = {
  tag: string;
  name: string;
  nameColor: string;
  trophies: number;
  highestTrophies: number;
  '3vs3Victories': number;
  soloVictories: number;
  duoVictories: number;
  icon: {
    id: number;
  }
}