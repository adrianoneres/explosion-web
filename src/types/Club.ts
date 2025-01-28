import { Member } from './Member';

export type Club = {
  tag: string;
  name: string;
  description: string;
  requiredTrophies: number;
  trophies: number;
  members: Member[];
};
