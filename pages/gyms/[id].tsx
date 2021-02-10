import Head from 'next/head'
import Layout from '../../components/layout'
import Map from '../../components/map'
import { getAllGymIds, getGymsData } from '../../lib/gyms'
import utilStyles from '../../styles/utils.module.css'
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
                <h1 className={utilStyles.headingXl}>{gymData.title}</h1>
                <h2>{gymData.branch}</h2>
                <a
                    href={gymData.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >{gymData.siteUrl}</a>
                <p className={utilStyles.lightText}>{gymData.address} {gymData.building}{gymData.floor}</p>
                <div>
                    {gymData.content}
                </div>
                <div>
                    {gymData.environment}
                </div>
                <div dangerouslySetInnerHTML={{ __html: gymData.contentHtml }} />
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