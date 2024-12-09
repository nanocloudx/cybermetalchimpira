import {Image} from '@/components/Image'
import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Omake1() {
  const info = getArticleInfo('omake1', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <h2>ねこのページ</h2>
        <Image height={'128mm'} src={'/2024/omake/omake1-1.jpg'} alt={'新入りが来たぞ'}/>
        <Image height={'72mm'} src={'/2024/omake/omake1-2.jpg'} alt={'理解らせてやらんとな'}/>
      </Page>
    </div>
  )
}
