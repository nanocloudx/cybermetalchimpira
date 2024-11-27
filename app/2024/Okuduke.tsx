import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Okuduke() {
  const info = getArticleInfo('okuduke')
  const startPage = getStartPage(info.id)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <p>*** TODO 奥付 ***</p>
      </Page>
    </div>
  )
}
