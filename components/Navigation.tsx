'use client'
import style from './Navigation.module.css'
import {PropsWithChildren} from 'react'

export function Navigation({children}: PropsWithChildren) {
  return (
    <div className={style.main}>
      <p className={style.heading}>サイバーメタルチンピラ</p>
      <ul>
        {children}
      </ul>
      <button onClick={() => {window.print()}} className={style.print}>印刷</button>
    </div>
  )
}
