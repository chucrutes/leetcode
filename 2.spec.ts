import { describe, expect, it } from '@jest/globals'
import { ListNode, addTwoNumbers } from './2'

describe('Add two numbers', () => {
  it('should return a linked list', () => {
    const item3 = new ListNode(3)
    const item2 = new ListNode(4, item3)
    const item1 = new ListNode(2, item2)

    const item6 = new ListNode(4)
    const item5 = new ListNode(6, item6)
    const item4 = new ListNode(5, item5)

    const res = addTwoNumbers(item1, item4)
    expect(res?.val).toEqual(8)
  })
  it('should return 0', () => {
    const item1 = new ListNode(0)
    const item2 = new ListNode(0)

    const res = addTwoNumbers(item1, item2)
    expect(res?.val).toEqual(0)
  })
})
