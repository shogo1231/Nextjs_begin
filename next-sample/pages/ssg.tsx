// 型のために導入
import { GetStaticProps, NextPage, NextPageContext } from 'next'
// Next.jsの組み込みのコンポーネント
import Head  from 'next/head'

// ページコンポーネントのprops型定義（ここでは空）
type SSGProps = {
  message: string
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に作成されたページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  )
}

// getStaticPropsはビルドに実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async(context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);
  return {
    // ここで返したpropsをもとにページコンポーネントを描画する
    props: {
      message,
    },
  }
}

export default SSG