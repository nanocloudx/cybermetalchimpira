import style from './MokujiLayout.module.scss'
import {ArticleInfo, getStartPage} from '@/app/lib'

type Props = {
  articleInfoList: ArticleInfo[]
}

export function MokujiLayout({articleInfoList}: Props) {
  return (
    <div className={style.main}>
      <h1>目次</h1>
      {articleInfoList.map((info) => {
        switch (info.id) {
          case 'prologue':
          case 'atogaki':
            return (
              <div key={info.id} className={style.item}>
                <p className={style.pageNumber}>{getStartPage(info.id, articleInfoList).toString().padStart(2, '0')}</p>
                <div>
                  <p style={{fontSize: '0.95rem'}}>{info.title}</p>
                </div>
              </div>
            )
          case 'mokuji':
          case 'okuduke':
          case 'omake1':
          case 'omake2':
            return null
          default:
            return (
              <div key={info.id} className={style.item}>
                <p className={style.pageNumber}>{getStartPage(info.id, articleInfoList).toString().padStart(2, '0')}</p>
                <div>
                  <p className={style.title}>{info.title}{info.authorName && (
                    <span className={style.authorName}>/ {info.authorName}</span>)}</p>
                  <p className={style.description}>{info.description}</p>
                </div>
              </div>
            )
        }
      })}
    </div>
  )
}
