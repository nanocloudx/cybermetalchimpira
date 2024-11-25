import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function ShodaiSato({pageNumber}: Props) {
  return (
    <div id={'shodaiSato'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'愛と金'}
          description={'あるいは信頼と信用'}
          name={'めたもん'}
          image={'/2024/authors/shodaisato.png'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
