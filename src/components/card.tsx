import { GymsData } from '@src/types'
import Link from 'next/link'

export default function Card({ allGymsData }: { allGymsData: GymsData }) {

  return (
    <>
      <ul className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 list-none p-0 xl:mx-10 md:mx-3 sm:mx-1">
        {allGymsData.map(( allGymData
        ) => (
          <Link
            href="/gyms/[id]"
            as={`/gyms/${allGymData.id}`}
          >
          <div className="rounded overflow-hidden shadow-lg my-2 hover:bg-gray-100">
              <img
                className="w-full h-52"
                src={allGymData.siteImage}
                alt={allGymData.name}
              />
            <div className="px-6 py-4">
                  <div className="font-bold text-base mb-1">
                    {allGymData.name} {allGymData.branch}
                  </div>
                  <small className="text-gray-500">
                  {allGymData.address} {allGymData.building}{allGymData.floor}
                    <br />
                    <div>
                      {allGymData.tags.map((tag, i) => (
                          <span
                            className="text-sm  inline-block px-2 uppercase rounded text-white bg-green-400 uppercase last:mr-0 mr-1 mt-1"
                            key={i}
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </small>
                </div>
              </div>
            </Link>
        ))}
        </ul>
    </>
  )
}