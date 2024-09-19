import { describe, it, expect } from 'vitest';
import { Fibonacci } from './Fibonacci';

describe('Fibonacci', () => {
  it('should throw a RangeError if n is less than 1', () => {
    expect(() => new Fibonacci(0)).toThrow(RangeError);
    expect(() => new Fibonacci(-1)).toThrow(RangeError);
  });

  it('should return 1 for n = 1', () => {
    const fib = new Fibonacci(1);
    expect(fib.execute()).toBe(1);
  });

  it('should return 1 for n = 2', () => {
    const fib = new Fibonacci(2);
    expect(fib.execute()).toBe(1);
  });

  it('should return 2 for n = 3', () => {
    const fib = new Fibonacci(3);
    expect(fib.execute()).toBe(2);
  });

  it('should return 3 for n = 4', () => {
    const fib = new Fibonacci(4);
    expect(fib.execute()).toBe(3);
  });

  it('should return 5 for n = 5', () => {
    const fib = new Fibonacci(5);
    expect(fib.execute()).toBe(5);
  });

  it('should return 8 for n = 6', () => {
    const fib = new Fibonacci(6);
    expect(fib.execute()).toBe(8);
  });
});
