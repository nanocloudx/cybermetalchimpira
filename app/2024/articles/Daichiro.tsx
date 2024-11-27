import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Daichiro() {

  const info = getArticleInfo('daichiro')
  const startPage = getStartPage(info.id)

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
