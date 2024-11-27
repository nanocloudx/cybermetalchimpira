import {Navigation} from '@/components/Navigation'
import {articleInfoList} from '@/app/2024/articleInfo'

export default function Page() {
  return (
    <div>
      <Navigation year={'2024'}>
        {articleInfoList.map((info) => (
          <li key={info.id}>
            <a href={`#${info.id}`}>{info.authorName || info.title} ({info.totalPage}p)</a>
          </li>
        ))}
      </Navigation>
      {articleInfoList.map((info) => info.component)}
    </div>
  )
}
