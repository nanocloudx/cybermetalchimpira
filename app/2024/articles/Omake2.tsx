import {Image} from '@/components/Image'
import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Omake2() {
  const info = getArticleInfo('omake2', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <h2>ねこのページ</h2>
        <Image height={'86mm'} src={'/2024/omake/omake2-1.jpg'} alt={'なんや新入り、手土産もなしか？'}/>
        <Image height={'112mm'} src={'/2024/omake/omake2-2.jpg'} alt={'ええもん持っとるやないか'}/>
      </Page>
    </div>
  )
}
