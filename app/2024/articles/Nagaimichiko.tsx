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
          title={'662日目のラブレター'}
          description={'子どもへの愛を叫ぶ'}
          name={'ながいたん'}
          image={'/2024/authors/nagaimichiko.jpeg'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
