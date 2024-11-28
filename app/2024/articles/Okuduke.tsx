import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Okuduke() {
  const info = getArticleInfo('okuduke', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <p>*** TODO 奥付 ***</p>
      </Page>
    </div>
  )
}
