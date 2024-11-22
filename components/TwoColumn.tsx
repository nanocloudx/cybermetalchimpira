import style from './TwoColumn.module.scss'
import {PropsWithChildren} from 'react'

export function TwoColumn({children}: PropsWithChildren) {
  return (
    <div className={style.main}>
      {children}
    </div>
  )
}
