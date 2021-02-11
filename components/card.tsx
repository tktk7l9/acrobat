import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

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
        <ul className={utilStyles.list}>
        {allGymsData.map(({ id, address, building, floor, title, branch, environment }) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href="/gyms/[id]" as={`/gyms/${id}`}>
                <a>{title} {branch}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
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