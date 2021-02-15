import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Card from '../components/card'
import { getSortedGymsData } from '../lib/gyms'

export const getStaticProps: GetStaticProps = async() => {
  const allGymsData = getSortedGymsData()
  return {
    props: {
      allGymsData
    }
  }
}

type Props = {
  allGymsData: {
    id: string
    title: string
    branch: string
    address: string
    building: string
    floor: string
    environment: string
  }[]
}

export default function Home({
  allGymsData
}:
  Props
) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-base">
        <p>アクロバットを練習できる場所を見つけるサイトです。</p>
      </section>
      <section className="text-base pt-px">
        <h2 className="text-sm my-4 mx-0">Gyms</h2>
        <Card allGymsData={allGymsData}/>
      </section>
    </Layout>
  )
}