import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Omake({pageNumber}: Props) {
  return (
    <div id={'omake'}>
      <Page pageNumber={pageNumber}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
