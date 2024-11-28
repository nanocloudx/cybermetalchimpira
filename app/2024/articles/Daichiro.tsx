import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Daichiro() {

  const info = getArticleInfo('daichiro', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        TODO だいちろ画像貼り付け
      </Page>
      <Page pageNumber={startPage + 1}>
        TODO だいちろ画像貼り付け
      </Page>
      <Page pageNumber={startPage + 2}>
        TODO だいちろ画像貼り付け
      </Page>
      <Page pageNumber={startPage + 3}>
        TODO だいちろ画像貼り付け
      </Page>
    </div>
  )
}
