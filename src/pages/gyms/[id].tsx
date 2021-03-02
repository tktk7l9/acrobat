import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllGymIds, getGymsData } from '../../lib/gyms'
import { GetStaticPaths } from 'next'
import React from 'react'
import { Footer } from '../../components/layouts/Footer'
import { GymsData } from '@src/types'
import { HomePageIcon, TwitterIcon, InstagramIcon, YouTubeIcon } from '@src/components/icons'
import OpenInfo from '@src/components/OpenInfo'

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
                        <ul className="flex flex-row mt-4 pb-0 space-x-2">
                            {gymData.homePage ? (
                                <a
                                href={gymData.homePage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-yellow-400"
                                >
                                    <HomePageIcon />
                                </a>
                            ): ( <a /> )}
                            {gymData.twitter ? (
                                <a
                                href={gymData.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-400"
                                >
                                    <TwitterIcon />
                                </a>
                            ): (<a /> )}
                            {gymData.instagram ? (
                                <a
                                    href={gymData.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-purple-400"
                                >
                                    <InstagramIcon />
                                </a>
                            ) : ( <a /> )}
                            {gymData.youtube ? (
                                <a
                                href={gymData.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-red-400"
                                >
                                    <YouTubeIcon />
                                </a>   
                            ) : ( <a /> )}
                        </ul>
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
                        <div className="py-2">
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
                            className="text-lg py-2 inline-block"
                        >
                            個人解放
                        </div>
                        <div
                            className="text-gray-500 inline-block px-6 text-xs sm:text-base">
                            実際とは異なる場合があります。公式HPをご確認ください。
                        </div>
                        <OpenInfo
                            openInfo={gymData.openInfo}
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