import {Image} from '@/components/Image'
import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {TwoColumn} from '@/components/TwoColumn'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Nanocloudx() {
  const info = getArticleInfo('nanocloudx', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
        <section>
          <p>
            突然ですが、お金持ちになりたいと思ったことある？ありますわよね？？？
          </p>
          <p>
            <b>さあ、いますぐドバイで油田を掘り当てに行くわよ〜〜〜！(錯乱)</b>
          </p>
          <p>
            そんなわけで突然ドバイに一人旅してきましたので旅行記です。
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
                「<b>エミレーツ航空</b>」はドバイ発着。直行便なので一番楽。東京に例えると羽田みたいな感じですわね。
              </p>
              <p>
                「<b>エティハド航空</b>」はアブダビ発着。バスに乗り継ぎ２時間弱でドバイに行けますの。成田みたいな感じですわね。
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/01.jpg'} alt={'ザイード(アブダビ)国際空港'}/>
          </TwoColumn>
          <p>
            流石オイルマネーの国なので、エコノミークラスでも十分豪華。空港も豪華。どちらの航空会社も美しくて良きですわ！
          </p>
          <p>
            ちなみにエミレーツとJAL、エティハドとANAはそれぞれ提携しているものの、直接エミレーツかエティハドで航空券買うほうが楽。
            スターアライアンスにもワンワールドにも加盟していないので、優先搭乗とかラウンジ利用は期待できないので注意ですの。
          </p>
        </section>
      </Page>
      <Page pageNumber={startPage + 1}>
        <section>
          <h2>砂漠を掘ってみた</h2>
          <p>ドバイ着いたし、早速油田を掘り当てるゾ！！！</p>
          <Image height={'57mm'} src={'/2024/nanocloudx/02.jpg'} alt={'うおおおおおお！！！'}/>
          <Image height={'57mm'} src={'/2024/nanocloudx/03.jpg'} alt={'うおおおおおおおおおおおお！！！！！！'}/>
          <Image height={'57mm'} src={'/2024/nanocloudx/04.jpg'} alt={'むりですわーーーーー'}/>
        </section>
      </Page>
      <Page pageNumber={startPage + 2}>
        <section>
          <h2>だめでした...</h2>
          <p>
            まぁ素手でサクッと掘れないことぐらいはわかってましたわよ。
            ってか仮に見つけたとしても観光客にはどうすることもできませんわ（それはそう）
          </p>
          <p>
            そもそもドバイのGDPに占める石油産業の割合は1-2%程度。
            石油が採掘できるのはお隣のアブダビで、ドバイでは石油はほとんど取れませんの。
            だからこそドバイは「観光と貿易」を発展させることで、世界中からヒトとモノを集めているんですね（賢い）
          </p>
          <p>
            さて、しょうがないので<b>観光をしましょう</b>(本題)。
            世界中のマネーが集まりまくっている砂漠の摩天楼、何もかもが世界一のドバイを満喫いたしますわ！！！
          </p>
        </section>
        <section>
          <h2>ブルジュ・ハリファ</h2>
          <p style={{marginTop: '-0.8rem'}}>(Burj Khalīfa, بُرْج خَلِيفَة)</p>
          <p>
            世界最大の建物であるブルジュ・ハリファ(バージュ・カリファ)。おそらくドバイで最も有名な建物といえばこれ。
            地上高829.8mはどこから見ても圧倒的な存在感。
          </p>
          <p>建物は夏季に吹き付ける熱波に耐えるため、特徴的な形をしていたり様々な建築技術が集まっているのも魅力。建築好きには堪りませんわ！</p>
          <p>地上555m(148階)の展望室「アット・ザ・トップ」は圧巻。地球が球体だとわかります。</p>
          <Image height={'107mm'} src={'/2024/nanocloudx/05.jpg'} alt={'もはや神々しい'}/>
        </section>
      </Page>
      <Page pageNumber={startPage + 3}>
        <section>
          <TwoColumn>
            <div>
              <h2>ドバイ・モール</h2>
              <p style={{marginTop: '-0.8rem'}}>(The Dubai Mall, دبي مول‎)</p>
              <p>
                ブルジュ・ハリファの地上部分はショッピングモールになっていて、これがえげつない広さ。
                規模は世界最大で111万平方メートル以上。東京ドーム23個分、数日掛けても回りきれないのだわ。
                モール内には1200以上の店舗の他、水族館、スケートリンク、カートサーキット、映画館、ホテルなどなど。
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/06.jpg'} alt={'とにかく広すぎてよくわからない'}/>
          </TwoColumn>
        </section>
        <section>
          <TwoColumn>
            <Image height={'50mm'} src={'/2024/nanocloudx/07.jpg'} alt={'ふれあいというか罰ゲームじゃん'}/>
            <div>
              <h2 style={{marginTop: 0}}>ドバイ・アクアリウム</h2>
              <p style={{marginTop: '-0.8rem'}}>(Dubai Aquarium, دبي أكواريوم)</p>
              <p>
                ドバイ・モールの中にある水族館、これも世界第２位の大きさを誇る水槽で規模感がしゅごい。
                これがモール内の一部なのだから、いかにドバイモールが巨大なのかわかるわね...
                サメとのふれあいコーナーもありますわよ。頑張ってくださいまし。
              </p>
            </div>
          </TwoColumn>
        </section>
        <section>
          <TwoColumn>
            <div>
              <h2>ドバイ・ファウンテン</h2>
              <p style={{marginTop: '-0.8rem'}}>(Dubai Fountain, نافورة دبي)</p>
              <p>
                これもドバイ・モール隣接ですの。
                世界最大の噴水ショーで、長さ275m、高さ最大150mの大迫力を無料で鑑賞できますわ！
                夕方18時頃から30分毎に行われるので、ショッピングの合間に見るのがおすすめですの。
                それにしてもEMAAR(中東最大の不動産会社)の主張強すぎません？
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/08.jpg'} alt={'写真じゃ伝わらない迫力'}/>
          </TwoColumn>
          <p style={{textAlign: 'center'}}>
            あまりに広すぎて、これではドバイ・モールだけで旅が終わってしまうわね。
          </p>
        </section>
      </Page>
      <Page pageNumber={startPage + 4}>
        <section>
          <TwoColumn>
            <div>
              <h2>スカイ・ビューズ</h2>
              <p style={{marginTop: '-0.8rem'}}>(Sky Views, مشاهدات السماء)</p>
              <p>
                ドバイ・モールから歩いて数分ぐらいかしら。
                地上219.5mのアドレス・スカイ・ビュー・ホテルの屋上を散歩できますの。
                ブルジュ・ハリファが高すぎるせいで錯覚するけど、こちらも十分高層タワーなのだわ〜！
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/09.jpg'} alt={'命綱でブランコできるよ'}/>
          </TwoColumn>
        </section>
        <section>
          <TwoColumn>
            <Image height={'50mm'} src={'/2024/nanocloudx/10.jpg'} alt={'規模感がしゅごい'}/>
            <div>
              <h2>パーム・ジュメイラ</h2>
              <p style={{marginTop: '-0.8rem'}}>(Palm Jumeirah, نخلة جميرا)</p>
              <p>
                海岸部に建設された人工島「パーム・ジュメイラ」。
                ヤシの形に作られた島内は、世界中の富豪たちが別荘地として豪邸を構えているのだわ！
                ドバイにいると感覚が狂ってきますわね。
              </p>
            </div>
          </TwoColumn>
        </section>
        <section>
          <TwoColumn>
            <div>
              <h2>ディナー インザ スカイ</h2>
              <p style={{marginTop: '-0.8rem'}}>(Dinner in The Sky, عشاء في السماء)</p>
              <p>
                空中でディナーを頂きましょう(？)
                クレーンで地上50mまで上昇、宙ぶらりんの状態で、シェフ自慢の極上料理をご堪能。
                なかなか美味でしたけれども、なんで浮いてるんですかねぇ。。。どうやらこれは世界各地で行われているらしいですわ。
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/11.jpg'} alt={'どういうことやねん'}/>
          </TwoColumn>
          <p style={{textAlign: 'center'}}>
            なんだか登ってばかりですわね。都市部だけでなく砂漠にも行ってみましょ。
          </p>
        </section>
      </Page>
      <Page pageNumber={startPage + 5}>
        <section>
          <TwoColumn>
            <div>
              <h2>デザート サファリ</h2>
              <p style={{marginTop: '-0.8rem'}}>(Desert Safari, رحلات السفاري الصحراوية‎)</p>
              <p>
                せっかく砂漠に来たのですから、砂漠でのアクティビティも愉しみましょうね。
                デザートサファリでは、凹凸の激しい砂漠の上をクレイジーな運転手が爆走してくれますわ！
                自然のジェットコースターを愉しみつつ、夕日が沈む時間帯の砂漠は絶景ですの！
              </p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/12.jpg'} alt={'横転しないんだろうか'}/>
          </TwoColumn>
        </section>
        <section>
          <TwoColumn>
            <Image height={'50mm'} src={'/2024/nanocloudx/13.jpg'} alt={'砂漠が海に見えますわ！'}/>
            <div>
              <h2>熱気球</h2>
              <p style={{marginTop: '-0.8rem'}}>(Hot air balloon, منطاد الهواء الساخن)</p>
              <p>
                夜明け前の砂漠から気球に乗って、空中から朝日を眺めましょうね。
                遥か遠くまで続く砂漠を、空からふわふわ眺めるのは格別でしてよ〜〜〜
                広大な世界とちっぽけな私。世界の広さを直感的に感じられますわ。
              </p>
            </div>
          </TwoColumn>
        </section>
        <section>
          <TwoColumn>
            <div>
              <h2>アル・シーフ地区</h2>
              <p style={{marginTop: '-0.8rem'}}>(Al Seef, السيف)</p>
              <p>
                エクストリームな体験ばかりで疲れちゃいますので、落ち着いた場所にも行きましょうね。
              </p>
              <p>海岸沿いに並ぶドバイの伝統的な町並みを体験できますの。本当に絨毯売ってるのね。潮風が心地よいですわ〜。</p>
            </div>
            <Image height={'50mm'} src={'/2024/nanocloudx/14.jpg'} alt={'アラジンの世界みたい'}/>
          </TwoColumn>
          <p style={{textAlign: 'center'}}>
            12月でも若干暑いぐらいでしたので、夏は相当大変そうですわね。
          </p>
        </section>
      </Page>
      <Page pageNumber={startPage + 6}>
        <section>
          <div>
            <h2>不思議な建造物</h2>
            <p>
              移動中にも不思議な建造物がたくさんありましたわ。景色も楽しくて素敵ですわ〜。
            </p>
          </div>
          <TwoColumn>
            <Image height={'43mm'} src={'/2024/nanocloudx/15.jpg'} alt={'なんだこれは'}/>
            <Image height={'43mm'} src={'/2024/nanocloudx/16.jpg'} alt={'たまげたなぁ'}/>
          </TwoColumn>
        </section>
        <section>
          <div>
            <h2>ドバイはいいぞ</h2>
            <p>
              食べ物も美味しくて良い旅でしたの。世界の広さを感じることができましたわ！<br/>
              あなたもドバイでお紅茶片手に石油王を目指してみませんか？
            </p>
            <Image height={'90mm'} src={'/2024/nanocloudx/18.jpg'}
                   alt={'ブルジュ・ハリファの展望台「At The Top」より愛を込めて'}/>
          </div>
        </section>
      </Page>
    </div>
  )
}
