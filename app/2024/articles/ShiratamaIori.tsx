import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function ShiratamaIori({pageNumber}: Props) {
  return (
    <div id={'shiratamaIori'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'メイド喫茶店員がガールズバーに転生してみた'}
          description={'***TODO 未指定***'}
          name={'白玉いおり'}
          image={'/2024/authors/shiratamaIori.jpg'}
          titleFontSize={'1.53rem'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
