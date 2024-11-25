import style from './Title.module.scss'
import {AtSignIcon, MonitorSmartphoneIcon,} from 'lucide-react'

type Props = {
  title: string
  description: string
  name: string
  image: string
  linkX?: string
  linkWeb?: string
  titleFontSize?: string
}

export function Title(props: Props) {
  return (
    <div className={style.main}>
      <h1 className={style.title} style={props.titleFontSize ? {fontSize: props.titleFontSize} : {}}>{props.title}</h1>
      <p className={style.description}>{props.description}</p>
      <div className={style.info}>
        <img className={style.image} src={props.image}/>
        <p className={style.name}>{props.name}</p>
        {props.linkX && (
          <>
            <AtSignIcon size={18} style={{marginRight: '0.1rem'}}/>
            <p className={style.linkX}>{props.linkX}</p>
          </>
        )}
        {props.linkWeb && (
          <>
            <MonitorSmartphoneIcon size={18} style={{marginRight: '0.1rem'}}/>
            <p className={style.linkWeb}>{props.linkWeb}</p>
          </>
        )}
      </div>
    </div>
  )
}
