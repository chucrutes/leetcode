import { describe, expect, it } from '@jest/globals'
import { longestPalindrome } from '../4'
describe('TestSuite', () => {
  it('should test even string', () => {
    const str = 'Lavaesseaval'
    const res = longestPalindrome(str)

    expect(res).toEqual(str.toLowerCase())
  })
  it('should test odd string', () => {
    const str = 'amoraroma'
    const res = longestPalindrome(str)

    expect(res).toEqual(str.toLowerCase())
  })
  it('should test odd string', () => {
    const str = 'babad'
    const res = longestPalindrome(str)

    expect(res).toEqual('aba')
  })
  it('should test odd string', () => {
    const str = 'cbbd'
    const res = longestPalindrome(str)

    expect(res).toEqual('bb')
  })
  it('should test odd string', () => {
    const str = 'abb'
    const res = longestPalindrome(str)

    expect(res).toEqual('bb')
  })
  it('should test palindrome of length 2', () => {
    const str = 'bb'
    const res = longestPalindrome(str)

    expect(res).toEqual('bb')
  })
  it('should test not palindrome of length 2', () => {
    const str = 'ac'
    const res = longestPalindrome(str)

    expect(res).toEqual('a')
  })
})
