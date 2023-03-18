// 型のために導入
import { NextPage } from 'next'
import Image from 'next/image'
// Next.jsの組み込みのコンポーネント
import Head  from 'next/head'
import BiBleImage from '../public/image/keroro.jpg'

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <Head>
        <title>ImageSample</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <h1>画像表示の比較</h1>
        <p>imgタグで表示した場合</p>
        <img src="image/keroro.jpg" />
        {/* Imageコンポーネントで表示 */}
        <p>Imageコンポーネントで表示した場合</p>
        <Image src={BiBleImage} placeholder="blur"/>
        <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
      </main>
    </div>
  )
}

export default ImageSample