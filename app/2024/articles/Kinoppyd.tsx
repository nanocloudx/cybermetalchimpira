import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Kinoppyd({pageNumber}: Props) {
  return (
    <div id={'kinoppyd'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'ワインの味とは何なのか'}
          description={'ワインの香りを嗅いで銘柄当てるとかあれフィクションだから'}
          name={'kinoppyd'}
          image={'/2024/authors/kinoppyd.jpeg'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
