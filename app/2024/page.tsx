import {Navigation} from '@/components/Navigation'
import {articleInfoList} from '@/app/2024/articleInfoList'
import {PreviewHyoshiPage} from '@/components/PreviewHyoshiPage'
import {BlankPage} from '@/components/BlankPage'

export default function Page() {
  return (
    <div>
      <Navigation year={'2024'} articleInfoList={articleInfoList}/>
      <PreviewHyoshiPage src={'/2024/hyoshi/hyoshi1.png'}/>
      <BlankPage />
      {articleInfoList.map((info) => info.component)}
      <BlankPage />
      <PreviewHyoshiPage src={'/2024/hyoshi/hyoshi2.png'}/>
    </div>
  )
}
