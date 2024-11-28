import style from './OkudukeLayout.module.scss'

type Props = {
  title: string
  publishDate: string
  event: string
  publisher: string
  contact: string
  printer: string
}

export function OkudukeLayout(props: Props) {
  return (
    <div className={style.main}>
      <h3>{props.title}</h3>
      <p>発行日 {props.publishDate} / {props.event}</p>
      <p>発行者 {props.publisher}</p>
      <p>連絡先 {props.contact}</p>
      <p>印刷所 {props.printer}</p>
    </div>
  )
}
