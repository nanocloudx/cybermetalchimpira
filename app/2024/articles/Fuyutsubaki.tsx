import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Fuyutsubaki() {
  const info = getArticleInfo('fuyutsubaki')
  const startPage = getStartPage(info.id)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
      </Page>
      <Page pageNumber={startPage + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
