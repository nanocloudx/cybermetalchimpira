import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Prologue() {
  const info = getArticleInfo('prologue', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
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
