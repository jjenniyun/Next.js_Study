import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>윤종신(황윤정) 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        홈 입니다
      </h1>
    </Layout>
  )
}