
import { Suspense } from "react";

import ClubDetails from "./components/ClubDetails";
import Loading from "../loading";

export default function ClubPage() {

  return (
    <Suspense fallback={<Loading />}>
      <ClubDetails />
    </Suspense>
  )
}