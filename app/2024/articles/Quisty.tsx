import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Quisty({pageNumber}: Props) {
  return (
    <div id={'quisty'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'異変を見つけたら、すぐに引き返すこと。'}
          description={'転職面接などで体験した事から働くという事を考える何か'}
          name={'きすちぃ'}
          image={'/2024/authors/quisty.png'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
