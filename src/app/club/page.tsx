
'use client';

import { Suspense } from "react";

import ClubDetails from "./components/ClubDetails";

export default function ClubPage() {

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ClubDetails />
    </Suspense>
  )
}