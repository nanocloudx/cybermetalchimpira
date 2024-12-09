export type ArticleId =
  'mokuji' | 'prologue' | 'atogaki' | 'okuduke' | 'hyoshi1' | 'hyoshi2' | 'omake1' | 'omake2' |
  'arushiro' | 'daichiro' | 'fuyutsubaki' | 'kusano' |
  'nanocloudx' | 'berserker' | 'quisty' | 'sashimi' |
  'shiratamaIori' | 'metamon' | 'dera' | 'nag4' |
  'nagaitan' | 'kinoppyd' | 'kuri'

export type ArticleInfo = {
  id: ArticleId
  component: React.ReactElement
  totalPage: number
  title: string
  description: string
  atogaki: string
  authorName: string
  authorImage: string
  authorLinkX?: string
  authorLinkWeb?: string
}

export function getStartPage(id: ArticleId, list: ArticleInfo[]) {
  let pageNumber = 1
  for (const article of list) {
    if (article.id === id) break
    pageNumber += article.totalPage
  }
  return pageNumber
}

export function getArticleInfo(id: ArticleId, list: ArticleInfo[]) {
  return list.find((article) => article.id === id)!
}
