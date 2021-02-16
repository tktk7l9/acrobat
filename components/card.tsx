import Link from 'next/link'

export default function Card({ allGymsData }: { allGymsData: any }) {

    type allGymsData = {
        id: string
        title: string
        branch: string
        address: string
        building: string
        floor: string
        tags: string[]
        siteImage: string
    }[]

  return (
    <>
      <ul className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 list-none p-0 mx-10">
        {allGymsData.map(({ id, address, building, floor, title, branch, tags, siteImage }) => (
        <Link href="/gyms/[id]" as={`/gyms/${id}`}>
          <div className="rounded overflow-hidden shadow-lg my-2 hover:bg-gray-100">
            <img className="w-full h-52" src={siteImage} alt={title} />
            <div className="px-6 py-4">
                  <div className="font-bold text-base mb-1">
                    {title} {branch}
                  </div>
                  <small className="text-gray-500">
                  {address} {building}{floor}
                    <br />
                    <div>
                      {tags.map((tag) => (
                            <span className="text-sm  inline-block px-2 uppercase rounded text-white bg-green-400 uppercase last:mr-0 mr-1 mt-1"
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