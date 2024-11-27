import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Prologue() {
  const info = getArticleInfo('prologue')
  const startPage = getStartPage(info.id)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <p>*** TODO プロローグ ***</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <p>*** TODO プロローグ ***</p>
      </Page>
    </div>
  )
}
