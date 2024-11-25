'use client'
import style from './Navigation.module.scss'
import {PropsWithChildren} from 'react'

type Props = {
  year: string
}

export function Navigation({children, year}: PropsWithChildren<Props>) {
  return (
    <div className={style.main}>
      <p className={style.heading}>サイバーメタルチンピラ<br />Viewer</p>
      <h2 style={{textAlign: 'center'}}>{year}</h2>
      <ul>
        {children}
      </ul>
      <button onClick={() => {
        window.print()
      }} className={style.print}>印刷
      </button>
    </div>
  )
}
