import { use } from "react"
import { format } from 'date-fns';

import { Player } from "@/types/Player";
import { Trophy } from "@/components/Trophy";

type PlayerDetailsProps = {
  tag: string;
}

async function fetchData(tag: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BS_API_URL}/players/${tag}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BS_API_KEY}`,
    }
  })

  console.log('>> response', `${process.env.NEXT_PUBLIC_BS_API_URL}/players/${tag}`);

  return response.json();
}

export default function PlayerDetails({ tag }: PlayerDetailsProps) {
  const data: Player = use(fetchData(tag));
  const isAboveGoal = process.env.NEXT_PUBLIC_TROPHY_GOAL && data.trophies >= Number(process.env.NEXT_PUBLIC_TROPHY_GOAL);
  const goalDifference = process.env.NEXT_PUBLIC_TROPHY_GOAL ? Number(process.env.NEXT_PUBLIC_TROPHY_GOAL) - data.trophies : 0;

  return (
    <>
      <section className="md:max-w-[600px] mx-auto">        
        <h1 className="text-4xl my-4">
          <em style={{ color: data.nameColor.replace('0xff', '#')}}>{data.name}</em>
        </h1>
        <div className="flex items-center">
          <Trophy size="md" className="mr-2" />
          <h2 className="text-xl text-slate-800">{data.trophies}</h2>
        </div>
      </section>
      {process.env.NEXT_PUBLIC_TROPHY_GOAL && process.env.NEXT_PUBLIC_TROPHY_DATE && (
        <section className="md:max-w-[600px] mx-auto mt-4">
          <div className="flex-1 bg-amber-50 p-4 rounded">
            <h2 className="mb-2 text-xl text-slate-700">Próxima meta do clube:</h2>
            <div className="flex items-center">
              <span className="text-slate-700">{process.env.NEXT_PUBLIC_TROPHY_GOAL} troféus até {format(process.env.NEXT_PUBLIC_TROPHY_DATE, 'dd/MM/yyy')}</span>
            </div>
            <div>
              {isAboveGoal && (
                <em className="text-emerald-500 mr-2 text-xl">Meta atingida!</em>
              )}
              {!isAboveGoal && (
                <>
                  <em className="text-red-600 mr-2 text-xl">Faltam:</em><span>{goalDifference}</span>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}