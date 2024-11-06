import { describe } from 'vitest'
import { BinarySearch } from './BinarySearch'
import { SearchTestsSuite } from './Search.test'

describe('BinarySearch', () => {
  SearchTestsSuite.execute(BinarySearch)
})
