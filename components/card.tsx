import Link from 'next/link'

export default function Card({ allGymsData }: { allGymsData: any }) {

    type allGymsData = {
        id: string
        name: string
        branch: string
        address: string
        building: string
        floor: string
        tags: string[]
        siteImage: string
    }[]

  return (
    <>
      <ul className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 list-none p-0 xl:mx-10 md:mx-3 sm:mx-1">
        {allGymsData.map((
          {
            id,
            address,
            building,
            floor,
            name,
            branch,
            tags,
            siteImage
          }:{
              id: string,
              address: string,
              building: string,
              floor: string,
              name: string,
              branch: string,
              tags: string[],
              siteImage: string
            }
        ) => (
          <Link
            href="/gyms/[id]"
            as={`/gyms/${id}`}
          >
          <div className="rounded overflow-hidden shadow-lg my-2 hover:bg-gray-100">
              <img
                className="w-full h-52"
                src={siteImage}
                alt={name}
              />
            <div className="px-6 py-4">
                  <div className="font-bold text-base mb-1">
                    {name} {branch}
                  </div>
                  <small className="text-gray-500">
                  {address} {building}{floor}
                    <br />
                    <div>
                      {tags.map((tag) => (
                        <span
                          className="text-sm  inline-block px-2 uppercase rounded text-white bg-green-400 uppercase last:mr-0 mr-1 mt-1"
                          key={tag}
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