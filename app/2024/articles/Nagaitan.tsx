import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {Image} from '@/components/Image'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Nagaitan() {
  const info = getArticleInfo('nagaitan', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
        <section style={{marginTop: '3rem'}}>
          <h3>君に初めて会ったとき。</h3>
          <p>賢い子だな、と思った。そして、生命力にあふれている子だと思った。疲労困憊で朦朧としている私を心配して、おとなしく側に佇んでくれる、優しい子。お見舞いに来た先生には自分から挨拶をしてくれる、気遣いのできる子。出会ってから時が経った今でも変わらない、君の素敵なところ。</p>
        </section>
        <section>
          <h3>君が初めて母乳を飲んだとき。</h3>
          <p>何も教えていないのに、おっぱいをちゃんと咥えて、はぐはぐと母乳を吸い込んだ。「ミルクもしっかり飲んでくれたんですよ」と看護師さんが教えてくれた。『美味しいもの食べさせてあげるから元気に生まれておいで』、そうお腹の中にいたときに伝えたことをしっかりと覚えているみたいだ。</p>
        </section>
        <section>
          <h3>君が初めて笑ってくれたとき。</h3>
          <p>いつものように顔を近づけて笑いかけてたら、真似っこして君が笑ってくれた。それがあんまりにも嬉しくて、「笑ったーーーーーーーー！！！！！！！！！」って私が叫んだら、君は目をまん丸にしてびっくりしてた。そして稲妻が走ったかのように、「これが笑うということか！！」と理解をした顔をしていた。</p>
        </section>
        <section>
          <h3>君が初めて甘えてきてくれたとき。</h3>
          <p>寝返りができるようになって、いつのまにか転がりながらどこへでも移動するようになって。私が洗濯物を畳んでいたら、ごろんごろんと私のところまで転がってきて、膝にちょこんと頭を乗せた。甘えたくて頑張って移動してきたんだね、と愛しさが爆発した。</p>
        </section>
        <section>
          <h3>君が初めて手をつないでくれたとき。</h3>
          <p>まだ上手に歩けない君が、当たり前のように私の手を取って、寝室からリビングまで移動した。私が君を支えること、その手を決してふりほどかないということを決して疑わない、絶対的な信頼感。あたたかくて小さな手に、尊敬の念すら覚えた。</p>
        </section>
      </Page>
      <Page pageNumber={startPage + 1}>
        <section>
          <h3>君が初めて「ママ」と呼んでくれたとき。</h3>
          <p>君がずっと呼びかけてくれていた言葉が、ママと聞こえた日。明確な証拠はないけれど、きっとママと呼んでくれたんだろう。どんな単語よりも先に、はっきりと伝えてくれた言葉。君のすべての要望を叶えるための、魔法の言葉。覚えてくれて、語りかけてくれて、ありがとう。……もっとも、君の初めての言葉は「よいしょ」だった気がするけれど。</p>
        </section>
        <section>
          <p>いまだに実感がない気もするけれど、君が私を母にしてくれました。なんで君はこんなにも日々私を愛してくれるのだろうと不思議で仕方がないけれども、君の信頼と愛情を裏切らない自分でありたいと思うのです。</p>
          <p>君の瞳に映る私が、いつも笑顔でありますように。</p>
          <Image height={'155mm'} src={'/2024/nagaitan/image1.jpg'}/>
        </section>
      </Page>
    </div>
  )
}
