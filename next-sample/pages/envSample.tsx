// 型のために導入
import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
// Next.jsの組み込みのコンポーネント
import Head  from 'next/head'

const EnvSample: NextPage<void> = (props) => {
  console.log('process.env.TEST', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return (
    <div>
      <Head>
        <title>EnvSample</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
      <p>{process.env.TEST}</p>
      <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log('process.env.TEST', process.env.TEST)
//   console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

//   return {
//     props: {}
//   }
// }

export default EnvSample