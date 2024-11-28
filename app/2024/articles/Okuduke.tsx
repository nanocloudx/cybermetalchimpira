import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'
import {OkudukeLayout} from '@/components/OkudukeLayout'

export function Okuduke() {
  const info = getArticleInfo('okuduke', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage} hidePageNumber>
        <OkudukeLayout
          title={'サイバーメタルチンピラ2024'}
          publishDate={'2024年12月30日'}
          event={'コミックマーケット105'}
          publisher={'サイバーメタルチンピラ一同'}
          contact={'nanocloudx@gmail.com'}
          printer={'株式会社栄光'}
        />
      </Page>
    </div>
  )
}
