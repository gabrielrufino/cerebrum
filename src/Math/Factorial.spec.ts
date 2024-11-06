import { describe, it, expect } from 'vitest';
import { Factorial } from './Factorial';

describe('Factorial', () => {
  it('should return 1 when n is 0', () => {
    expect(new Factorial(0).execute()).toBe(1);
  });

  it('should return 1 when n is 1', () => {
    expect(new Factorial(1).execute()).toBe(1);
  });

  it('should return 2 when n is 2', () => {
    expect(new Factorial(2).execute()).toBe(2);
  });

  it('should return 6 when n is 3', () => {
    expect(new Factorial(3).execute()).toBe(6);
  });

  it('should return 24 when n is 4', () => {
    expect(new Factorial(4).execute()).toBe(24);
  });

  it('should return 120 when n is 5', () => {
    expect(new Factorial(5).execute()).toBe(120);
  });

  it('should throw an error when n is negative', () => {
    expect(() => new Factorial(-1).execute()).toThrow(
      'Input should be a non-negative integer'
    );
  });
});
