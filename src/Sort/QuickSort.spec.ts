import { describe } from 'vitest';
import { QuickSort } from './QuickSort';
import { SortTestsSuite } from './Sort.spec';

describe('QuickSort', () => {
  SortTestsSuite.execute(QuickSort)
});
