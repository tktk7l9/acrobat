import Head from 'next/head'
import Layout from '../../components/layout'
import Map from '../../components/map'
import { getAllGymIds, getGymsData } from '../../lib/gyms'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Gyms({
    gymData
}: {
        gymData: {
        title: string
        branch: string
        content: string
        address: string
        building: string
        floor: string
        lat: string
        lng: string
        siteUrl: string
        environment: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{gymData.title}</title>
            </Head>
            <article>
                <h1 className="text-3xl font-extrabold tracking-tighter my-4 mx-0">{gymData.title}</h1>
                <h2 className="text-2xl font-extrabold my-4">{gymData.branch}</h2>
                <a
                    href={gymData.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-xl"
                >{gymData.siteUrl}</a>
                <p className="text-gray-500 text-xl my-4">{gymData.address} {gymData.building}{gymData.floor}</p>
                <div className="text-lg">
                    {gymData.content}
                </div>
                <div className="text-lg my-4">
                    {gymData.environment}
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: gymData.contentHtml }}
                    className="text-lg my-4"
                />
                <Map targetLat={gymData.lat} targetLng={gymData.lng} />
            </article>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllGymIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const gymData = await getGymsData(params.id as string)
    return {
        props: {
            gymData
        }
    }
}