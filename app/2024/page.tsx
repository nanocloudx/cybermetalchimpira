import {Navigation} from '@/components/Navigation'
import {articleInfoList} from '@/app/2024/articleInfoList'

export default function Page() {
  return (
    <div>
      <Navigation year={'2024'} articleInfoList={articleInfoList}/>
      {articleInfoList.map((info) => info.component)}
    </div>
  )
}
