import {Image} from '@/components/Image'
import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Omake() {
  const info = getArticleInfo('omake', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <h2>おまけ</h2>
        <Image height={'80mm'} src={'/2024/chinpiracat01.JPG'} alt={'なんや新入り、手土産もなしか？'}/>
        <Image height={'105mm'} src={'/2024/chinpiracat02.JPG'} alt={'ええもん持っとるやないか'}/>
      </Page>
    </div>
  )
}
