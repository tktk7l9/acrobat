import Link from 'next/link'

export default function Card({ allGymsData }: { allGymsData: any }) {

    type allGymsData = {
        id: string
        title: string
        branch: string
        address: string
        building: string
        floor: string
        environment: string
    }[]

  return (
    <>
        <ul className="list-none p-0 m-0">
        {allGymsData.map(({ id, address, building, floor, title, branch, environment }) => (
            <li className="mt-0 mx-0 mb-5" key={id}>
                <Link href="/gyms/[id]" as={`/gyms/${id}`}>
                <a>{title} {branch}</a>
                </Link>
                <br />
                <small className="text-gray-500">
                {address} {building}{floor}
                <br />
                {environment}
                </small>
            </li>
            ))}
         </ul>
    </>
  )
}