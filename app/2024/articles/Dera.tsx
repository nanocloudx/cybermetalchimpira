import {Page} from '@/components/Page'
import {Title} from '@/components/Title'

type Props = {
  pageNumber: number
}

export function Dera({pageNumber}: Props) {
  return (
    <div id={'dera'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'メンズコーチチンピラDの弱男育成記録'}
          description={'世の弱男どもを一端の男にするありがてぇ話をしてやるよ'}
          name={'チンピラD'}
          image={'/2024/authors/dera.png'}
        />
        <p>It works!</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>It works!</p>
      </Page>
    </div>
  )
}
