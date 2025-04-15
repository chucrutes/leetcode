import { describe, expect, it } from '@jest/globals'
import { merge } from '../88'

describe('Merge arrays', () => {
  it('case 1', () => {
    const res = merge([1, 2, 3, 0, 0, 0], 0, [2, 5, 6], 3)

    expect(res).toEqual([1, 2, 2, 3, 5, 6])
  })
  it('case 2', () => {
    const res = merge([0], 0, [1], 3)

    expect(res).toEqual([1])
  })
  it('case 3', () => {
    const res = merge([1], 0, [0], 3)

    expect(res).toEqual([1])
  })
})
