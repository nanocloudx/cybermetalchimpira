import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Nagaimichiko({pageNumber}: Props) {
  return (
    <div id={'nagaimichiko'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={''}
          description={''}
          name={'xxx'}
          image={'/2024/xxx/author.jpg'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
