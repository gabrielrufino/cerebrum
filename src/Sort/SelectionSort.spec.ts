import { describe } from 'vitest';
import { SelectionSort } from './SelectionSort';
import { SortTestsSuite } from './Sort.spec';

describe('SelectionSort', () => {
  SortTestsSuite.execute(SelectionSort)
});
