import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Mokuji() {
  const info = getArticleInfo('mokuji')
  const startPage = getStartPage(info.id)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <p>*** TODO もくじ ***</p>
      </Page>
    </div>
  )
}
