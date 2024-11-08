import { describe } from 'vitest'

import { SortTestsSuite } from './Sort.spec'
import { MergeSort } from './MergeSort'

describe('MergeSort', () => {
  SortTestsSuite.execute(MergeSort)
})
