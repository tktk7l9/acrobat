import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
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
      <section className={utilStyles.headingMd}>
        <p>アクロバットを練習できる場所を見つけるサイトです。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.HeadingLg}>Gyms</h2>
        <ul className={utilStyles.list}>
          {allGymsData.map(({ id, address, title, branch }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/gyms/[id]" as={`/gyms/${id}`}>
                <a>{title} {branch}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {/* <Date dateString={date} /> */}
                {address}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}