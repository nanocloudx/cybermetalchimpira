import {expect, test} from 'vitest'
import {getStartPage} from '@/app/lib'
import {articleInfoList as list2024} from '@/app/2024/articleInfoList'

test('入稿可能なページ数である', () => {
  const lastPage = getStartPage('okuduke', list2024)
  expect(lastPage % 4).toBe(0)
})
