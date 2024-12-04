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
    <>
      <div className={style.main}>
        <h3>{props.title}</h3>
        <p>発行日 {props.publishDate} / {props.event}</p>
        <p>発行者 {props.publisher}</p>
        <p>連絡先 {props.contact}</p>
        <p>印刷所 {props.printer}</p>
      </div>
      <div className={style.notice}>
        <p>各記事の著作権は執筆者に帰属します。許可なき転載をお断りいたします。</p>
        <p>The copyright of each article belongs to the author. No reproduction without permission.</p>
      </div>
    </>
  )
}
