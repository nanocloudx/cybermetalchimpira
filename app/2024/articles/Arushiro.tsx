import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Arushiro({pageNumber}: Props) {
  return (
    <div id={'arushiro'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'達成感中毒患者と難しいゲーム達'}
          description={'壺おじなどの登山ゲーやその他難しいゲームについて'}
          name={'あるしろ'}
          image={'/2024/authors/arushiro.png'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
