import style from './Title.module.scss'
import {AtSignIcon, MonitorSmartphoneIcon,} from 'lucide-react'
import {ArticleInfo} from '@/app/2024/articleInfo'

type Props = {
  articleInfo: ArticleInfo
  titleFontSize?: string
}

export function Title({articleInfo, titleFontSize}: Props) {
  return (
    <div className={style.main}>
      <h1 className={style.title} style={titleFontSize ? {fontSize: titleFontSize} : {}}>{articleInfo.title}</h1>
      <p className={style.description}>{articleInfo.description}</p>
      <div className={style.info}>
        <img className={style.image} src={articleInfo.authorImage}/>
        <p className={style.name}>{articleInfo.authorName}</p>
        {articleInfo.authorLinkX && (
          <>
            <AtSignIcon size={18} style={{marginRight: '0.1rem'}}/>
            <p className={style.linkX}>{articleInfo.authorLinkX}</p>
          </>
        )}
        {articleInfo.authorLinkWeb && (
          <>
            <MonitorSmartphoneIcon size={18} style={{marginRight: '0.1rem'}}/>
            <p className={style.linkWeb}>{articleInfo.authorLinkWeb}</p>
          </>
        )}
      </div>
    </div>
  )
}
