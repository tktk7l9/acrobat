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
        tags: string[]
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <div className="max-w-2xl mx-auto">
                <Head>
                    <title>{gymData.title}</title>
                </Head>
                <article>
                    <h1 className="text-3xl font-extrabold tracking-tighter my-4 mx-0">
                        {gymData.title}  {gymData.branch}
                    </h1>
                    <a
                        href={gymData.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-xl"
                    >
                        {gymData.siteUrl}
                    </a>
                    <p className="text-gray-500 text-xl my-4">
                        {gymData.address} {gymData.building}{gymData.floor}
                    </p>
                    <div className="text-lg">
                        {gymData.content}
                    </div>
                    <div>
                        {gymData.tags.map((tag) => (
                        <span className="text-xm inline-block  px-2 uppercase rounded text-white bg-green-400 uppercase last:mr-0 mr-1 mt-4"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: gymData.contentHtml }}
                        className="text-lg my-4"
                    />
                    <Map targetLat={gymData.lat} targetLng={gymData.lng} />
                </article>
            </div>
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