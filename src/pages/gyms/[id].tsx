import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllGymIds, getGymsData } from '../../lib/gyms'
import { GetStaticPaths } from 'next'
import React from 'react'
import { Footer } from '../../components/layouts/Footer'
import { GymsData } from '@src/types'

export default function Gyms({ gymData }: { gymData: GymsData }) {
    return (
        <>
            <Layout>
                <div className="max-w-2xl mx-auto">
                    <Head>
                        <title>{gymData.name}</title>
                    </Head>
                    <article>
                        <h1
                            className="text-3xl font-extrabold tracking-tighter my-4 mx-0">
                            {gymData.name}  {gymData.branch}
                        </h1>
                        <div>
                            {gymData.snsLink.map((sns, i) => (
                            <div>
                                <a
                                    href={sns}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 text-xl"
                                    key={i}
                                >
                                {sns}
                                </a>
                            </div>
                            ))}
                        </div>
                        <p
                            className="text-gray-500 text-xl my-4"
                        >
                            {gymData.address} {gymData.building}{gymData.floor}
                        </p>
                        <div
                            className="text-lg"
                        >
                            {gymData.content}
                        </div>
                        <div>
                            {gymData.tags.map((tag, i) => (
                                <span
                                    className="text-xm inline-block  px-2 uppercase rounded text-white bg-green-400 uppercase last:mr-0 mr-1 mt-4"
                                    key={i}
                                >
                                {tag}
                            </span>
                            ))}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{ __html: gymData.contentHtml }}
                            className="text-lg my-4"
                        />
                    </article>
                </div>
            </Layout>
            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllGymIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params
}: { params: GymsData }) {
    const gymData = await getGymsData(params.id as string)
    return {
        props: {
            gymData
        }
    }
}