import { test, expect } from '@jest/globals'
import { sum } from '../src/Recursion'

test('Recursion', () => {
  expect(sum(3)).toBe(6)
})
