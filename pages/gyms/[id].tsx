import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllGymIds, getGymsData } from '../../lib/gyms'
import Date from '../../components/date'
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
                <p className={utilStyles.lightText}>{gymData.address}</p>
                <div>
                    {gymData.content}
                </div>
                <div>
                    {gymData.environment}
                </div>
                <div dangerouslySetInnerHTML={{ __html: gymData.contentHtml }} />
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