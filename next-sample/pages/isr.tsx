// 型のために導入
import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
// Next.jsの組み込みのコンポーネント
import Head  from 'next/head'
import { useRouter } from 'next/router';

// ページコンポーネントのprops型定義（ここでは空）
type ISRProps = {
  message: string
};

// ISRPropsを受けつけるnextPageの型
const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  const router = useRouter();
  if(router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <main>
          <p>
            このページはISRによってビルド時に作成されたページです。
          </p>
          <p>{message}</p>
        </main>
      </div>
    </>
  )
}

// GetServerSidePropsはページのリクエストがあるたびに実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
export const getStaticProps: GetStaticProps<ISRProps> = async(context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);
  // console.log(context);
  return {
    // ここで返したpropsをもとにページコンポーネントを描画する
    props: {
      message,
    },
    // ページの有効期限を秒単位で設定
    revalidate: 10,
  }
}

export default ISR