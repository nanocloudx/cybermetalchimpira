import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Omake() {
  const info = getArticleInfo('omake')
  const startPage = getStartPage(info.id)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <p>*** TODO おまけ ***</p>
      </Page>
    </div>
  )
}
