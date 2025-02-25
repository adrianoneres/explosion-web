'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

import Loading from '@/app/loading';
import { Club } from '@/types/Club';
import { Trophy } from '@/components/Trophy';
import { Role } from '@/components/Role';
import { getClub, getIcons } from '@/services';
import { getExp } from '@/helpers/exp.helper';
import { GetIconsResponse } from '@/services/brawilify-api';

export default function ClubDetails() {
  const { exp } = useParams();
  const [icons, setIcons] = useState<GetIconsResponse>({} as GetIconsResponse);
  const [data, setData] = useState<Club>({} as Club);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIcons().then((res) => setIcons(res));

    getClub(getExp(exp as string)).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, [exp]);

  if (isLoading) return <Loading />;

  return (
    <>
      <section className="mx-auto md:max-w-[600px]">
        <div className="my-8 flex items-center justify-center">
          <Trophy size="lg" className="mr-2" />
          <h2 className="text-3xl">{data.trophies}</h2>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 rounded bg-amber-50 p-4">
            <h2 className="mb-2 text-xl text-slate-700">Tag</h2>
            <div className="flex items-center">
              <span className="text-slate-700">{data.tag}</span>
            </div>
          </div>
          <div className="flex-1 rounded bg-amber-50 p-4">
            <h2 className="mb-2 text-xl text-slate-700">Troféus necessários</h2>
            <div className="flex items-center">
              <span className="text-slate-700">{data.requiredTrophies}</span>
            </div>
          </div>
        </div>
      </section>
      {process.env.NEXT_PUBLIC_TROPHY_GOAL && process.env.NEXT_PUBLIC_TROPHY_DATE && (
        <section className="mx-auto mt-4 md:max-w-[600px]">
          <div className="flex-1 rounded bg-amber-50 p-4">
            <h2 className="mb-2 text-xl text-slate-700">Próxima meta:</h2>
            <div className="flex items-center">
              <span className="text-slate-700">
                {process.env.NEXT_PUBLIC_TROPHY_GOAL} até{' '}
                {format(process.env.NEXT_PUBLIC_TROPHY_DATE, 'dd/MM/yyy')}
              </span>
            </div>
          </div>
        </section>
      )}
      <section className="mx-auto my-8 md:max-w-[600px]">
        <h2 className="mb-4 text-4xl text-slate-900">Membros:</h2>
        <div className="flex flex-col gap-2">
          {data.members?.map((member, index) => (
            <Link key={member.tag} href={`/players/${member.tag.replace('#', '%23')}`}>
              <div className="cursor-pointer border-4 border-b-8 border-r-8 border-slate-900 bg-gray-400 p-4 transition-all hover:bg-gray-300">
                <div className="flex items-center">
                  <div className="mr-2 flex h-10 w-10 justify-center bg-gray-500 p-2">
                    <em className="text-xl text-gray-400">{index + 1}</em>
                  </div>
                  {member.icon.id && (
                    <Image
                      src={icons.player[member.icon.id].imageUrl}
                      alt="Player image"
                      width={40}
                      height={40}
                    />
                  )}
                  <div className="ml-2 flex flex-1">
                    <div className="flex flex-1 flex-col">
                      <em
                        style={{ color: member.nameColor.replace('0xff', '#') }}
                        className="text-sm"
                      >
                        {member.name}
                      </em>
                      <em className="text-sm">
                        <Role value={member.role} />
                      </em>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="mr-2" />
                      <em className="text-sm text-amber-50">{member.trophies}</em>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
