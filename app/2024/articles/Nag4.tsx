import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Nag4({pageNumber}: Props) {
  return (
    <div id={'nag4'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'死ぬ日を自分で決める「自寿死」という考え'}
          description={'寿命を自分で決めれば、人生の質を上げられるという話'}
          name={'nag4'}
          image={'/2024/authors/nag4.png'}
          titleFontSize={'1.61rem'}
          linkX={'nag4'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
