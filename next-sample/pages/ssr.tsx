// 型のために導入
import { GetServerSideProps, NextPage } from 'next'
// Next.jsの組み込みのコンポーネント
import Head  from 'next/head'
import Link from 'next/link'

// ページコンポーネントのprops型定義（ここでは空）
type SSRProps = {
  message: string
  envTest: string
  envNEXT_PUBLIC_TEST: string
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message, envTest, envNEXT_PUBLIC_TEST } = props;

  console.log(envTest)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバで描画されたページです。
        </p>
        <p>{message}</p>
      </main>
      <Link href="/ssg">
        GOTOSSG
      </Link>
      <div>{envTest}</div>
      <p>{envNEXT_PUBLIC_TEST}</p>
    </div>
  )
}

// GetServerSidePropsはページのリクエストがあるたびに実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
export const getServerSideProps: GetServerSideProps<SSRProps> = async(context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);
  // console.log(context);

  const envTEST = process.env.TEST;
  const envNEXT_PUBLIC_TEST = process.env.NEXT_PUBLIC_TEST;
  return {
    // ここで返したpropsをもとにページコンポーネントを描画する
    props: {
      message,
      envTEST,
      envNEXT_PUBLIC_TEST
    },
  }
}

export default SSR