import { test, expect } from '@jest/globals'
import quickSort from '../src/QuickSort'

test('quickSort', () => {
  let arr = [4, 5, 2, 65, 1, 6]
  quickSort(arr)
  expect(arr).toStrictEqual([1, 2, 4, 5, 6, 65])
})


test('quickSort', () => {
  let arr: any[] = [];
  quickSort(arr)
  expect(arr).toStrictEqual([])
})