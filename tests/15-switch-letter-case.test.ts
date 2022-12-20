import { describe, expect, it } from 'vitest';
import {
  switchLetterCase,
  switchLetterCase2,
} from '../src/15-switch-letter-case';

describe('switch letter case', () => {
  it('正常情况', () => {
    const str = 'aBcD1eF33**#g';
    expect(switchLetterCase(str)).toBe('AbCD1Ef33**#G');
    expect(switchLetterCase2(str)).toBe('AbCd1Ef33**#G');
  });

  it('空字符', () => {
    const str = '';
    expect(switchLetterCase(str)).toBe('');
    expect(switchLetterCase2(str)).toBe('');
  });

  it('非字母字符', () => {
    const str = '**#你好';
    expect(switchLetterCase(str)).toBe('**#你好');
    expect(switchLetterCase2(str)).toBe('**#你好');
  });
});
