import style from './Image.module.scss'

type Props = {
  src: string
  alt?: string
  height?: string
}

export function Image({src, alt, height = '60mm'}: Props) {
  return (
    <div className={style.main}>
      <img className={style.image} style={{maxHeight: height}} src={src}/>
      {alt && <small className={style.caption}>{alt}</small>}
    </div>
  )
}
