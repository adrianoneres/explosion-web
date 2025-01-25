import { use } from "react"
import { format } from 'date-fns';

import { Club } from "@/types/Club";
import { Trophy } from "@/components/Trophy";
import { Role } from "@/components/Role";
import Link from "next/link";

async function fetchData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BS_API_URL}/clubs/${process.env.NEXT_PUBLIC_BS_CLUB_TAG}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BS_API_KEY}`,
    }
  })

  return response.json();
}

export default function ClubDetails() {
  const data: Club = use(fetchData());

  return (
    <>
      <section className="md:max-w-[600px] mx-auto">
        <div className="my-8 flex justify-center items-center">
          <Trophy size="lg" className="mr-2" />
          <h2 className="text-3xl">{data.trophies}</h2>
        </div>
        
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex-1 bg-amber-50 p-4 rounded">
            <h2 className="mb-2 text-xl text-slate-700">Tag</h2>
            <div className="flex items-center">
              <span className="text-slate-700">{data.tag}</span>
            </div>
          </div>
          <div className="flex-1 bg-amber-50 p-4 rounded">
            <h2 className="mb-2 text-xl text-slate-700">Troféus necessários</h2>
            <div className="flex items-center">
              <span className="text-slate-700">{data.requiredTrophies}</span>
            </div>
          </div>
        </div>
      </section>
      {process.env.NEXT_PUBLIC_TROPHY_GOAL && process.env.NEXT_PUBLIC_TROPHY_DATE && (
        <section className="md:max-w-[600px] mx-auto mt-4">
          <div className="flex-1 bg-amber-50 p-4 rounded">
            <h2 className="mb-2 text-xl text-slate-700">Próxima meta:</h2>
            <div className="flex items-center">
              <span className="text-slate-700">{process.env.NEXT_PUBLIC_TROPHY_GOAL} até {format(process.env.NEXT_PUBLIC_TROPHY_DATE, 'dd/MM/yyy')}</span>
            </div>
          </div>
        </section>  
      )}
      <section className="md:max-w-[600px] mx-auto my-8">
        <h2 className="text-4xl text-slate-900 mb-4">Membros:</h2>
        <div className="flex flex-col gap-2">
          {data.members?.map((member, index) => (
            <Link key={member.tag} href={`/player/${member.tag.replace('#', '%23')}`}>
              <div className="p-4 bg-gray-400 border-4 border-b-8 border-r-8 border-slate-900 hover:bg-gray-300 transition-all cursor-pointer">
                <div className="flex items-center">
                  <div className="flex justify-center bg-gray-500 p-2 w-12 h-12 mr-2">
                    <em className="text-gray-400 text-2xl">{index + 1}</em>
                  </div>
                  <div className="flex flex-1">
                    <div className="flex flex-col flex-1">
                      <em style={{ color: member.nameColor.replace('0xff', '#')}}>{member.name}</em>
                      <em><Role value={member.role} /></em>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="mr-2" />
                      <em className="text-amber-50">{member.trophies}</em>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}