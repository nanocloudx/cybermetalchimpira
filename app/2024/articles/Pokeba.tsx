import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Pokeba({pageNumber}: Props) {
  return (
    <div id={'pokeba'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'リファレンスチェックに想いを馳せる'}
          description={'推薦者視点での備忘録'}
          name={'狂戦士P'}
          image={'/2024/authors/pokeba.png'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
