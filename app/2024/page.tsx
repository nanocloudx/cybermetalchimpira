import {Nanocloudx} from '@/app/2024/Nanocloudx'
import {Navigation} from '@/components/Navigation'

export default function Page() {
  return (
    <div>
      <Navigation>
        <li><a href={'#index'}>目次</a></li>
        <li><a href={'#prologue'}>プロローグ</a></li>
        <li><a href={'#nanocloudx'}>なのくろ</a></li>
        <li><a href={'#atogaki'}>あとがき</a></li>
        <li><a href={'#omake'}>おまけ</a></li>
        <li><a href={'#okuduke'}>奥付</a></li>
      </Navigation>
      <Nanocloudx pageNumber={2}/>
    </div>
  )
}
