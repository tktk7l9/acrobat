import Link from 'next/link'

export default function Card({ allGymsData }: { allGymsData: any }) {

    type allGymsData = {
        id: string
        title: string
        branch: string
        address: string
        building: string
        floor: string
        tags: string
    }[]

  return (
    <>
        <ul className="list-none p-0 m-0">
        {allGymsData.map(({ id, address, building, floor, title, branch, tags }) => (
            <li className="text-blue-500 mt-0 mx-0 mb-5" key={id}>
                <Link href="/gyms/[id]" as={`/gyms/${id}`}>
                <a className="hover:underline">{title} {branch}</a>
                </Link>
                <br />
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
            </li>
            ))}
         </ul>
    </>
  )
}