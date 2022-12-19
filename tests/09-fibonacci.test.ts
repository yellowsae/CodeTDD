import { describe, expect, it } from 'vitest';
import { fibonacci, fibonacci3 } from '../src/09-fibonacci';
describe('斐波那契数列', () => {
  it('正常情况', () => {
    const result = fibonacci(10);
    const result2 = fibonacci3(10);
    expect(result).toBe(55);
    expect(result2).toBe(55);
  });

  it('n 为 0', () => {
    const result = fibonacci(0);
    const result2 = fibonacci3(0);
    expect(result).toBe(0);
    expect(result2).toBe(0);
  });

  it('n 为 1', () => {
    const result = fibonacci(1);
    const result2 = fibonacci3(1);
    expect(result).toBe(1);
    expect(result2).toBe(1);
  });
});
