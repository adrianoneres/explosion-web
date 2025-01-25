'use client';

import { useParams } from "next/navigation"
import PlayerDetails from "./components/PlayerDetails";

export default function PlayerPage() {
  const { tag } = useParams();

  return <PlayerDetails tag={tag as string} />
}