import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {Image} from '@/components/Image'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'

export function Kusano() {
  const info = getArticleInfo('kusano', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
        <p>「サイバーメタルチンピラ」の「サイバー」要素として、とある暗号を紹介します。</p>
        <p>
          <b>「お、なんか難しそうだな。次の章に行くか」</b>と飛ばそうとした方、ちょっと待ってください。
          素数などの難しい数学の話は出てきません。
          インターネットの安全性を支える暗号には高度な数学の理論が用いられていますが、暗号の中にはこんな簡単なものもあるという話です。
        </p>
        <h2>視覚暗号</h2>
        <p>
          ここに2枚の画像があります。
          それぞれの画像を見ても何の情報も得られません。
        </p>
        <Image height={'40mm'} src={'/2024/kusano/figure1.png'}/>
        <p>
          この2枚の画像を、各画素についてどちらか一方でも黒い画素なら黒として重ねると、次のように「サメチン」の文字が浮かび上がります。
        </p>
        <Image height={'40mm'} src={'/2024/kusano/figure2.png'}/>
        <p>重ねる様子をYouTubeにアップロードしました。</p>
        <Image height={'20mm'} src={'/2024/kusano/qr.png'}/>
        <p style={{marginTop: '-1rem', textAlign: 'center'}}>https://youtu.be/HlhFV0BwtnU</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <p>
          これが「視覚暗号」（Visual Cryptography）という暗号です。
        </p>
        <p>
          透明なフィルムに印刷するなどすれば、コンピュータを使わずに視覚的に復号ができることから、この名前が付いているのだと思います。
          一方の画像が暗号文で他方が鍵と考えることもできますし、オリジナルの画像の情報が2枚の画像に分散されていると考えることもできます。
        </p>
        <h2>原理</h2>
        <Image height={'40mm'} src={'/2024/kusano/figure3.png'}/>
        <p>
          原理も簡単です。この図は、2枚の画像から1行ずつ抜き出したものと、それを重ね合わせたものを表しています。
          オリジナルの画像の1個の画素が、暗号化したそれぞれの画像では2個の画素に対応します。
          オリジナルの画素は、左側の4個が白で、右側の4個が黒です。
        </p>
        <p>
          暗号化した画像の1枚目（Share 1）では、2個の画素のうち、左側か右側のどちらかだけをランダムに黒にします。2枚目の画像（Share
          2）は、オリジナルの画素が白であればShare 1と同じ側を、黒であればShare 1とは異なる側を黒にします。
          こうすることで、重ね合わせたときに、オリジナルの画素が白い部分は2個の画素が白と黒になり、黒い部分は2個の画素とも黒くなって、オリジナルの画像が読み取れるようになります。
        </p>
        <h2>k of n</h2>
        <p>
          2枚ではなく3枚の画像を用いることもできます。
          さらに、3枚のうちどれか2枚を重ねるの（2 of 3）か、それとも2枚ではなく3枚全てを重ねて初めて絵が浮かび上がるのか（3
          of 3）を制御することもできます。例を示します。
        </p>
        <Image height={'55mm'} src={'/2024/kusano/figure4.png'}/>
      </Page>
      <Page pageNumber={startPage + 2}>
        <p>
          左側の2組は、3枚のうちどれか2枚を重ねれば絵が浮かびあがるものの、白い画素と黒い画素を表しています。
          左側のオリジナルの白い画素に対応する組は、どのように重ねても3画素中の1画素のみが黒くなります。
          一方、右側の黒い画素に対応する組は、どの2枚の組み合わせでも3画素中の2画素が黒くなり、この割合の違いからオリジナルの画素が白と黒のどちらなのかが区別できます。
        </p>
        <p>
          右側の2組は、3枚全てを重ねると絵が浮かび上がるものです。
          2枚の組み合わせでは、どのような組み合わせでも、オリジナルの画素が白であっても黒であっても4画素中の2画素が黒くなって、オリジナルの画素が何なのかは分かりません。
          3枚全てを重ね合わせると、区別ができるようになります。
        </p>
        <p>
          これをそのまま画像全体に敷き詰めると、例えばShare 2の黒い画素の位置が異なるので、Share
          2の1枚だけからオリジナルの画像が分かってしまいます。
          それぞれの組の中でランダムに並び替えることで、1枚の画像や、3 of 3の2枚の画像の組み合わせでは、情報が得られなくなります。
        </p>
        <h2>安全性</h2>
        <p>
          視覚暗号はどれだけ高い計算性能を持ってしても破ることができません。
          専門用語では「情報理論的に安全である」と言います。
          一方、現在インターネットなどで広く使われている暗号は、高い性能のコンピューターで長時間を掛ければ、理屈の上では破ることができます（世界中のスーパーコンピュータを集めて何十年掛けても破れない程度に強度が高められてはいますが）。
        </p>
        <p>
          それでは、なぜ視覚暗号のように情報理論的に安全な暗号が広く使われていないかというと、暗号鍵のサイズがオリジナルのデータと同じサイズになってしまうからです。
          暗号鍵を安全に保存したり伝えたりする手段があるならば、オリジナルのデータを暗号化せずにそのまま保存したり伝えたりすれば良いという話になってしまいます。
        </p>
        <p>
          ということで、使いどころは難しいけれど、原理がシンプルな暗号の紹介でした。
          何か面白い使い方ができないかを考えてみるのも楽しいと思います。
        </p>
        <h3>参考文献</h3>
        <p style={{textAlign: 'start'}}>
          Naor, Moni, and Adi Shamir.
          &quot;Visual cryptography.&quot;
          <i>Advances in Cryptology&mdash;EUROCRYPT&#39;94: Workshop on the Theory and Application of Cryptographic
            Techniques Perugia, Italy, May 9&ndash;12, 1994 Proceedings 13</i>.
          Springer Berlin Heidelberg, 1995.
        </p>
      </Page>
    </div>
  )
}
