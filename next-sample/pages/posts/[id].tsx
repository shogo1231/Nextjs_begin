// 型のために導入
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next'
// Next.jsの組み込みのコンポーネント
import Head  from 'next/head'
import { useRouter } from 'next/router'

// ページコンポーネントのprops型定義（ここでは空）
type PostProps = {
  id: string
};

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

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
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  )
}

// getStaticPropsはビルドに実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
export const getStaticPaths: GetStaticPaths = async() => {
  // それぞれのパスをまとめたもの
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },    {
      params: {
        id: '3',
      },
    },
  ]
  return { paths, fallback: false}
}


export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const id = Array.isArray(context.params['id']) ? context.params['id'][0] : context.params['id'];
  return {props: {id}}
} 
export default Post