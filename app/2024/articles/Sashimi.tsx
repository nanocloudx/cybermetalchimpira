import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Sashimi() {
  const info = getArticleInfo('sashimi', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
        <p>It works!</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
