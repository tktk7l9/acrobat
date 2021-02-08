import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedGymsData } from '../lib/gyms'

export async function getStaticProps() {
  const allGymsData = getSortedGymsData()
  return {
    props: {
      allGymsData
    }
  }
}

export default function Home({ allGymsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>アクロバットを練習できる場所を見つけるサイトです。</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.HeadingLg}>Gyms</h2>
        <ul className={utilStyles.list}>
          {allGymsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/gyms/[id]" as={`/gyms/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}