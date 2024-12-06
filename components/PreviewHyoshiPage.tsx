import style from './PreviewHyoshiPage.module.scss'

type Props = {
  src: string
}

export function PreviewHyoshiPage({src}: Props) {
  return (
    <div className={style.main}>
      <img className={style.image} src={src}/>
    </div>
  )
}
