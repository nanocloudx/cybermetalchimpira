import {Page} from '@/components/Page'

type Props = {
  pageNumber: number
}

export function Prologue({pageNumber}: Props) {
  return (
    <div id={'prologue'}>
      <Page pageNumber={pageNumber}>
        <p>*** TODO プロローグ ***</p>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <p>*** TODO プロローグ ***</p>
      </Page>
    </div>
  )
}
