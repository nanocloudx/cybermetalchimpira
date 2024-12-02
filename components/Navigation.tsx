'use client'
import style from './Navigation.module.scss'
import {ArticleInfo, getStartPage} from '@/app/lib'
import {CircleAlertIcon, CircleCheckIcon} from 'lucide-react'

type Props = {
  year: string
  articleInfoList: ArticleInfo[]
}

export function Navigation({year, articleInfoList}: Props) {
  const totalPage = getStartPage('okuduke', articleInfoList) + 4
  return (
    <div className={style.main}>
      <p className={style.heading}>サイバーメタルチンピラ<br/>Viewer</p>
      <h2 style={{textAlign: 'center'}}>{year}</h2>
      <ul style={{marginBottom: '1rem'}}>
        {articleInfoList.map((info) => (
          <li key={info.id}>
            <a href={`#${info.id}`}>{info.authorName || info.title} / {getStartPage(info.id, articleInfoList)}p ({info.totalPage}p)</a>
          </li>
        ))}
      </ul>
      <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {totalPage % 2 === 0 ? <CircleCheckIcon style={{color: 'green'}} /> : <CircleAlertIcon style={{color: 'red'}} /> }
        <span style={{marginLeft: '0.2rem', fontWeight: 'bold'}}>{totalPage}ページ</span>
      </p>
      <button onClick={() => {
        window.print()
      }} className={style.print}>印刷
      </button>
    </div>
  )
}
