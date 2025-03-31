import { describe, expect, it } from '@jest/globals'
import { lengthOfLongestSubstring } from '../3'

describe('Find biggest substring', () => {
  it('should return 3', () => {
    const res = lengthOfLongestSubstring('abcabcbb')

    expect(res).toEqual(3)
  })

  it('should return 1', () => {
    const res = lengthOfLongestSubstring('bbbb')

    expect(res).toEqual(1)
  })
  it('should return 3', () => {
    const res = lengthOfLongestSubstring('pwwkew')

    expect(res).toEqual(3)
  })
  it('should return 3', () => {
    const res = lengthOfLongestSubstring('dvdf')

    expect(res).toEqual(3)
  })
  it('no letters repeat should return the length of the string', () => {
    const str = 'abc'
    const res = lengthOfLongestSubstring(str)

    expect(res).toEqual(str.length)
  })
})
