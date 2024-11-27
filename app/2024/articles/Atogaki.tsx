import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Atogaki() {
  const info = getArticleInfo('atogaki')
  const startPage = getStartPage(info.id)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <p>*** TODO あとがき ***</p>
      </Page>
    </div>
  )
}
