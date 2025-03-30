export class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number, next?: ListNode | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

export function sumNums(
  l1: ListNode | null | undefined,
  l2: ListNode | null | undefined,
  sum: 0 | 1 = 0,
  l3: ListNode | null = null,
  counter = 0
): ListNode | null {
  if (!l1 && !l2) {
    return l3;
  }
  const newCount = counter + 1;
  const l1Value = l1?.val ?? 0;
  const l2Value = l2?.val ?? 0;

  const each = l1Value + l2Value + sum;
  const addOne = each >= 10;
  const temp = addOne ? each - 10 : each;

  const linkedList = new ListNode(temp, l3);

  if (!addOne && !l1?.next && !l2?.next) return linkedList;

  if (addOne && !l1?.next && !l2?.next) {
    const lastLinkedList = new ListNode(1, linkedList);

    return lastLinkedList;
  }

  return sumNums(l1?.next, l2?.next, addOne ? 1 : 0, linkedList, newCount);
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) {
    return null;
  }

  const l3 = sumNums(l1, l2);
  return l3;
}
