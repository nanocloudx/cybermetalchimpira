import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Okuduke({pageNumber}: Props) {
  return (
    <div id={'okuduke'}>
      <Page pageNumber={pageNumber}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
