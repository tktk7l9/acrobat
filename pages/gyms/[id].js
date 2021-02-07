import Layout from '../../components/layout'
import { getAllGymIds, getGymsData } from '../../lib/gyms'

export default function Gyms({ gymData }) {
    return (
        <Layout>
            {gymData.title}
            <br />
            {gymData.id}
            <br />
            {gymData.date}
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllGymIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const gymData = getGymsData(params.id)
    return {
        props: {
            gymData
        }
    }
}