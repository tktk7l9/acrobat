import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstGym() {
    return (
        <Layout>
            <Head>
                <title>Acrobat First Gym</title>
            </Head>
            <h1>First Gym</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}