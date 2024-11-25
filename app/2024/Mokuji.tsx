import {Page} from '@/components/Page'

type Props = {
  pageNumber: number
}

export function Mokuji({pageNumber}: Props) {
  return (
    <div id={'mokuji'}>
      <Page pageNumber={pageNumber}>
        <p>*** TODO もくじ ***</p>
      </Page>
    </div>
  )
}
