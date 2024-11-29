import style from './AtogakiLayout.module.scss'
import {ArticleInfo} from '@/app/lib'

type Props = {
  articleInfoList: ArticleInfo[]
}

export function AtogakiLayout({articleInfoList}: Props) {
  return (
    <div className={style.main}>
      <h2>チンピラ達からひとこと</h2>
      {articleInfoList.map((info) => {
        switch (info.id) {
          case 'mokuji':
          case 'prologue':
          case 'atogaki':
          case 'okuduke':
          case 'omake':
            return null
          default:
            return (
              <div key={info.id} className={style.item}>
                <img className={style.image} src={info.authorImage}/>
                <div>
                  <p className={style.authorName}>{info.authorName}</p>
                  <p className={style.message}>{info.atogaki}</p>
                </div>
              </div>
            )
        }
      })}
    </div>
  )
}
