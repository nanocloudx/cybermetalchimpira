import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Fuyutsubaki({pageNumber}: Props) {
  return (
    <div id={'fuyutsubaki'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'909ライブパフォーマンス(仮)'}
          description={'***TODO 未指定***'}
          name={'冬椿'}
          image={'/2024/authors/fuyutsubaki.png'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
