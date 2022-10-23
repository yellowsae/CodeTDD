import { test, expect } from 'vitest'
import { sum } from "../src/index"


test('test result', () => {
  console.log(sum(1, 2))
  expect(sum(1, 2)).toBe(3)
})
