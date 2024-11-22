import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Atogaki({pageNumber}: Props) {
  return (
    <div id={'atogaki'}>
      <Page pageNumber={pageNumber}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
