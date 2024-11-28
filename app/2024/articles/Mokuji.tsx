import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Mokuji() {
  const info = getArticleInfo('mokuji', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <p>*** TODO もくじ ***</p>
      </Page>
    </div>
  )
}
