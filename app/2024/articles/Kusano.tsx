import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Kusano({pageNumber}: Props) {
  return (
    <div id={'kusano'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'視覚暗号'}
          description={'サイバー空間で使われているものとはちょっと違った面白い暗号の紹介'}
          name={'kusano_k'}
          image={'/2024/authors/kusano.png'}
          linkX={'kusano_k'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
