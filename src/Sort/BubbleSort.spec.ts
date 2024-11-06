import { describe } from 'vitest';
import { BubbleSort } from './BubbleSort';
import { SortTestsSuite } from './Sort.spec';

describe('BubbleSort', () => {
  SortTestsSuite.execute(BubbleSort)
});
