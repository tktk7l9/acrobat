import Head from 'next/head'
import Link from 'next/link'

const name = 'Acrobat Portal'
export const siteTitle = 'アクロバットの練習場探し'

export default function Layout({
  children,
  home
}: {
    children: React.ReactNode
    home?: boolean
}) {
  return (
    <div className="py-0 px-4 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="アクロバットの練習場を探せるサイト"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <h1 className="text-5xl font-extrabold tracking-tighter my-4 mx-0">{name}</h1>
          </>
        ) : (
          <>
            <h2 className="text-2xl">
              <Link href="/">
                <a className="">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="text-center mr-96 text-blue-500 mt-12 mx-0 mb-0">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}