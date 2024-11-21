import style from './Image.module.scss'

type Props = {
  src: string
  alt?: string
}

export function Image({src, alt}: Props) {
  return (
    <div className={style.main}>
      <img className={style.image} src={src}/>
      {alt && <small className={style.caption}>{alt}</small>}
    </div>
  )
}
