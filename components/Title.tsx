import style from './Title.module.css'
import {
  AtSignIcon,
  RssIcon,
} from 'lucide-react'

type Props = {
  title: string
  description: string
  name: string
  image: string
  linkX?: string
  linkWeb?: string
}

export function Title(props: Props) {
  return (
    <div className={style.main}>
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.description}>{props.description}</p>
      <div className={style.info}>
        <img className={style.image} src={props.image}/>
        <p className={style.name}>{props.name}</p>
        {props.linkX && (
          <>
            <AtSignIcon size={18} />
            <p className={style.linkX}>{props.linkX}</p>
          </>
        )}
        {props.linkWeb && (
          <>
            <RssIcon size={18} />
            <p className={style.linkWeb}>{props.linkWeb}</p>
          </>
        )}
      </div>
    </div>
  )
}
