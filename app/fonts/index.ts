import localFont from 'next/font/local'

export const enFont = localFont({
  src: [
    {
      path: 'Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-en',
})

export const jaFont = localFont({
  src: [
    {
      path: 'BIZUDGothic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'BIZUDGothic-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ja',
})

export const minchoFont = localFont({
  src: [
    {
      path: 'NotoSerifJP.ttf',
    }
  ],
  variable: '--font-mincho',
})
