import { describe } from 'vitest'
import { BinarySearch } from './BinarySearch'
import { SearchTestsSuite } from './Search.spec'

describe('BinarySearch', () => {
  SearchTestsSuite.execute(BinarySearch)
})
