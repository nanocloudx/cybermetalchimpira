import {Page} from '@/components/Page'

type Props = {
  pageNumber: number
}

export function Daichiro({pageNumber}: Props) {
  return (
    <div id={'daichiro'}>
      <Page pageNumber={pageNumber}>
        TODO だいちろ画像貼り付け
      </Page>
      <Page pageNumber={pageNumber + 1}>
        TODO だいちろ画像貼り付け
      </Page>
      <Page pageNumber={pageNumber + 2}>
        TODO だいちろ画像貼り付け
      </Page>
      <Page pageNumber={pageNumber + 3}>
        TODO だいちろ画像貼り付け
      </Page>
    </div>
  )
}
