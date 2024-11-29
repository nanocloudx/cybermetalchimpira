import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Omake() {
  const info = getArticleInfo('omake', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <p>*** TODO おまけ ***</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <p>*** TODO おまけ ***</p>
      </Page>
      <Page pageNumber={startPage + 2}>
        <p>*** TODO おまけ ***</p>
      </Page>
    </div>
  )
}
