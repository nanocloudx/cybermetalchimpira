import style from './Page.module.scss'

import {PropsWithChildren} from 'react'

type Props = {
  pageNumber: number
}

export function Page({children, pageNumber}: PropsWithChildren<Props>) {
  return (
    <div className={`${style.page} ${pageNumber % 2 === 0 ? style.even : style.odd}`}>
      <div className={style.container}>
        {children}
      </div>
      <div className={style.pageNumber}>{pageNumber}</div>
    </div>
  )
}
