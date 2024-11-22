import {Nanocloudx} from '@/app/2024/Nanocloudx'
import {Navigation} from '@/components/Navigation'
import {Arushiro} from '@/app/2024/Arushiro'
import {ChimpiraD} from '@/app/2024/ChimpiraD'
import {Daichiro} from '@/app/2024/Daichiro'
import {Fuyutsubaki} from '@/app/2024/Fuyutsubaki'
import {Kinoppyd} from '@/app/2024/Kinoppyd'
import {Kusano} from '@/app/2024/Kusano'
import {Nag4} from '@/app/2024/Nag4'
import {Nagaimichiko} from '@/app/2024/Nagaimichiko'
import {Pokeba} from '@/app/2024/Pokeba'
import {Quisty} from '@/app/2024/Quisty'
import {ShiratamaIori} from '@/app/2024/ShiratamaIori'
import {ShodaiSato} from '@/app/2024/ShodaiSato'
import {Atogaki} from '@/app/2024/Atogaki'
import {Omake} from '@/app/2024/Omake'
import {Okuduke} from '@/app/2024/Okuduke'
import {Prologue} from '@/app/2024/Prologue'
import {Mokuji} from '@/app/2024/Mokuji'

// ページ数管理
const pageCount = {
  mokuji: 1,
  prologue: 2,
  arushiro: 2,
  chimpiraD: 2,
  daichiro: 2,
  fuyutsubaki: 2,
  kinoppyd: 2,
  kusano: 2,
  nag4: 2,
  nagaimichiko: 2,
  nanocloudx: 3,
  pokeba: 2,
  quisty: 2,
  shiratamaIori: 2,
  shodaiSato: 2,
  atogaki: 1,
  omake: 1,
  okuduke: 1,
}

function getPageNumber(section: keyof typeof pageCount) {
  let pageNumber = 0
  for (const key in pageCount) {
    if (key === section) break
    pageNumber += pageCount[key as keyof typeof pageCount]
  }
  return pageNumber + 1
}

export default function Page() {
  return (
    <div>
      <Navigation>
        <li><a href={'#mokuji'}>目次</a></li>
        <li><a href={'#prologue'}>プロローグ</a></li>
        <li><a href={'#arushiro'}>あるしろ</a></li>
        <li><a href={'#chimpiraD'}>ちんぴらD</a></li>
        <li><a href={'#daichiro'}>だいちろ</a></li>
        <li><a href={'#fuyutsubaki'}>冬椿</a></li>
        <li><a href={'#kinoppyd'}>kinoppyd</a></li>
        <li><a href={'#kusano'}>kusano</a></li>
        <li><a href={'#nag4'}>nag4</a></li>
        <li><a href={'#nagaimichiko'}>nagaimichiko</a></li>
        <li><a href={'#nanocloudx'}>なのくろ</a></li>
        <li><a href={'#pokeba'}>狂戦士P</a></li>
        <li><a href={'#quisty'}>きすちぃ</a></li>
        <li><a href={'#shiratamaIori'}>白玉いおり</a></li>
        <li><a href={'#shodaiSato'}>shodai_sato</a></li>
        <li><a href={'#atogaki'}>あとがき</a></li>
        <li><a href={'#omake'}>おまけ</a></li>
        <li><a href={'#okuduke'}>奥付</a></li>
      </Navigation>
      <Mokuji pageNumber={getPageNumber('mokuji')} />
      <Prologue pageNumber={getPageNumber('prologue')} />
      <Arushiro pageNumber={getPageNumber('arushiro')} />
      <ChimpiraD pageNumber={getPageNumber('chimpiraD')} />
      <Daichiro pageNumber={getPageNumber('daichiro')} />
      <Fuyutsubaki pageNumber={getPageNumber('fuyutsubaki')} />
      <Kinoppyd pageNumber={getPageNumber('kinoppyd')} />
      <Kusano pageNumber={getPageNumber('kusano')} />
      <Nag4 pageNumber={getPageNumber('nag4')} />
      <Nagaimichiko pageNumber={getPageNumber('nagaimichiko')} />
      <Nanocloudx pageNumber={getPageNumber('nanocloudx')} />
      <Pokeba pageNumber={getPageNumber('pokeba')} />
      <Quisty pageNumber={getPageNumber('quisty')} />
      <ShiratamaIori pageNumber={getPageNumber('shiratamaIori')} />
      <ShodaiSato pageNumber={getPageNumber('shodaiSato')} />
      <Atogaki pageNumber={getPageNumber('atogaki')}/>
      <Omake pageNumber={getPageNumber('omake')} />
      <Okuduke pageNumber={getPageNumber('okuduke')} />
    </div>
  )
}
