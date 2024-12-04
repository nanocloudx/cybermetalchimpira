import style from './FullImagePage.module.scss'

type Props = {
  pageNumber: number
  src: string
}

export function FullImagePage({src, pageNumber}: Props) {
  return (
    <div className={`${style.page} ${pageNumber % 2 === 0 ? style.even : style.odd}`}>
      <div className={style.container}>
        <img className={style.image} src={src}/>
      </div>
      <div className={`${style.pageNumber} ${pageNumber % 2 === 0 ? style.even : style.odd}`}>{pageNumber}</div>
    </div>
  )
}
