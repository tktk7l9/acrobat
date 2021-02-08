import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllGymIds, getGymsData } from '../../lib/gyms'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Gyms({ gymData }) {
    return (
        <Layout>
            <Head>
                <title>{gymData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{gymData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={gymData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: gymData.contentHtml }} />
            </article>
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
    const gymData = await getGymsData(params.id)
    return {
        props: {
            gymData
        }
    }
}