import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Omake({pageNumber}: Props) {
  return (
    <div id={'omake'}>
      <Page pageNumber={pageNumber}>
        <p>*** TODO おまけ ***</p>
      </Page>
    </div>
  )
}
