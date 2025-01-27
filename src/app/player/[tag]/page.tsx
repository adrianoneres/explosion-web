import { Suspense } from "react";

import Loading from "@/app/loading";
import PlayerDetails from "./components/PlayerDetails";

export default function PlayerPage() {

  return (
    <Suspense fallback={<Loading />}>
      <PlayerDetails />
    </Suspense>
  )
}