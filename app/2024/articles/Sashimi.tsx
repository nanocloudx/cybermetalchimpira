import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Sashimi({pageNumber}: Props) {
  return (
    <div id={'sashimi'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'盆踊り(仮)'}
          description={'***TODO 未指定***'}
          name={'さしみ'}
          image={'/2024/authors/sashimi.jpg'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
