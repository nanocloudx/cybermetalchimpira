import {Image} from '@/components/Image'
import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {TwoColumn} from '@/components/TwoColumn'

type Props = {
  pageNumber: number
}

export function Nanocloudx({pageNumber}: Props) {
  return (
    <div id={'nanocloudx'}>
      <Page pageNumber={pageNumber}>
        <Title
          title={'ドバイで石油王になろう'}
          description={'5000兆円欲しいのでUAEに行ってきたわよ！'}
          name={'なのくろ'}
          image={'/2024/nanocloudx/author.jpg'}
          linkX={'nanocloudx'}
          linkWeb={'wwww.dev'}
        />
        <section>
          <p>
            突然ですが、お金持ちになりたいと思ったことある？ありますわよね？？？
          </p>
          <p>
            <b>さあ、いますぐドバイで油田を掘り当てに行くわよ〜〜〜！(錯乱)</b>
          </p>
        </section>
        <section>
          <h2>UAEの基礎知識</h2>
          <p>
            <b>UAE (United Arab Emirates / الإِمَارات العربِيَّة المُتَّحِدة‎ )</b> はアラブ首長国連邦の略、オイルマネーで急速な経済発展を遂げた国。
            名前の通り７つの首長国が１つになっていて、有名なのは<b>首都アブダビ</b>、そして<b>最大都市ドバイ</b>ですの。
          </p>
          <p>
            気候はめちゃくちゃ暑い。砂漠ですしね。<b>5月〜9月は40度超え</b>も珍しくないので避けたほうが良さそう。
            12月〜2月なら最高気温25度ぐらいなので、行くなら冬季をおすすめしますわ〜！
          </p>
          <p>
            通貨はAED(アラブ首長国連邦ディルハム)、執筆時点で「<b>1ディルハム=40円</b>」ぐらいですの。
            歩いている人は全員石油王で、蛇口を捻れば原油が出てくる(大嘘)。さぁいますぐドバイに向かうのよ。
          </p>
        </section>
        <section>
          <TwoColumn>
            <div>
              <h2>ドバイへの行き方</h2>
              <p>
                「<b>エミレーツ航空</b>」はドバイ発着。直行便なので一番楽。羽田みたいな感じ。<br/>
                「<b>エティハド航空</b>」はアブダビ発着。バスに乗り継ぎ２時間弱でドバイに行けますの。成田みたいな感じですわね。<br/>
                流石オイルマネーの国なので、エコノミークラスでも十分豪華。空港も豪華。どちらの航空会社も美しくて良きですわ！
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/2.jpg'} alt={'ザイード(アブダビ)国際空港'}/>
          </TwoColumn>
          <p>
            ちなみにエミレーツとJAL、エティハドとANAはそれぞれ提携しているものの、直接エミレーツかエティハドで航空券買うほうが楽。
            スターアライアンスにもワンワールドにも加盟していないので、優先搭乗とかラウンジ利用は期待できないので注意ですの。
          </p>
        </section>
      </Page>
      <Page pageNumber={pageNumber + 1}>
        <section>
          <h2>砂漠を掘ってみた</h2>
          <p>ドバイ着いたし、早速油田を掘り当てるゾ！！！</p>
          <Image height={'57mm'} src={'/2024/nanocloudx/2.jpg'} alt={'うおおおおおお！！！'}/>
          <Image height={'57mm'} src={'/2024/nanocloudx/2.jpg'} alt={'うおおおおおおおおおおおお！！！！！！'}/>
          <Image height={'57mm'} src={'/2024/nanocloudx/2.jpg'} alt={'石油でてこないーーー'}/>
        </section>
      </Page>
      <Page pageNumber={pageNumber + 2}>
        <section>
          <h2>だめでした...</h2>
          <p>
            まぁ素手でサクッと掘れないことぐらいはわかってましたわよ。
            ってか仮に見つけたとしても観光客にはどうすることもできないわよ（それはそう）
          </p>
          <p>
            そもそもドバイのGDPに占める石油産業の割合は1-2%程度。
            石油が採掘できるのはお隣のアブダビで、ドバイでは石油はほとんど取れませんの。
            だからこそドバイは「観光と貿易」を発展させることで、世界中からヒトとモノを集めているんですね（賢い）
          </p>
        </section>
        <section>
          <h2>観光をします</h2>
          <p>
            さて、しょうがないので<b>観光をしましょう</b>(本題)。
            世界中のマネーが集まりまくっている砂漠の摩天楼、何もかもが世界一のドバイを満喫いたしますわ！！！
          </p>
        </section>
        <section>
          <h2>ブルジュ・ハリファ</h2>
          <p>
            世界最大の建物であるブルジュ・ハリファ。おそらくドバイで最も有名な建物といえばこれ。
            地上高829.8mはどこから見ても圧倒的な存在感。地上555m(148階)には展望室あり。
            吹き付ける熱波に耐えるため、高度な建築技術が集まっているのも建築好きには堪りませんわね！
          </p>
          <Image height={'100mm'} src={'/2024/nanocloudx/2.jpg'} alt={'なんかもう高すぎてしゅごい//////'}/>
        </section>
      </Page>
      <Page pageNumber={pageNumber + 3}>
        <section>
          <TwoColumn>
            <div>
              <h2>ドバイ・モール</h2>
              <p>
                ブルジュ・ハリファの地上部分はショッピングモールなのだけど、これがえげつない広さ。
                規模は世界最大で111万平方メートル以上。東京ドーム23個分、数日掛けても回りきれないのだわ。
                モール内には1200以上の店舗の他、水族館、スケートリンク、カートサーキット、映画館、ホテルなどなど。
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/2.jpg'} alt={'なんかもう広すぎてしゅごい////////////'}/>
          </TwoColumn>
        </section>
        <section>
          <TwoColumn>
            <div>
              <h2>ドバイ・アクアリウム</h2>
              <p>
                ドバイ・モールの中にある水族館、これも世界第２位の大きさを誇る水槽で規模感がしゅごい。
                これがモール内の一部なのだから、いかにドバイモールが巨大なのかわかるわね...
                サメとのふれあいコーナーもありますわよ、逝ってらっしゃいまし！！！
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/2.jpg'} alt={'ふれあいというか罰ゲームじゃん////////////'}/>
          </TwoColumn>
        </section>
        <section>
          <TwoColumn>
            <div>
              <h2>ドバイ・ファウンテン</h2>
              <p>
                これもドバイ・モール隣接ですの（やばすぎ）。
                世界最大の噴水ショーで、長さ275m、高さ最大150mの大迫力を無料で鑑賞できますわ！
                夕方18時頃から30分毎に行われるので、ショッピングの合間に見るのがおすすめでしてよ。
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/2.jpg'} alt={'なんかもう規模感がしゅごい////////////'}/>
          </TwoColumn>
          <p>
            あまりに広すぎて、ドバイ・モールだけで旅が終わってしまうので、違うところにも行ってみましょ。
          </p>
        </section>
      </Page>
      <Page pageNumber={pageNumber + 4}>
        <section>
          <TwoColumn>
            <div>
              <h2>スカイ・ビューズ・ドバイ</h2>
              <p>
                ドバイ・モールから歩いて数分ぐらいかしら。
                地上219.5mのアドレス・スカイ・ビュー・ホテルの屋上を散歩できますの。
                ブルジュ・ハリファが高すぎるせいで錯覚するけど、こちらも十分高層タワーなのだわ〜！
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/2.jpg'} alt={'なんかもう落ちそうでしゅごい////////////'}/>
          </TwoColumn>
        </section>
      </Page>
    </div>
  )
}
