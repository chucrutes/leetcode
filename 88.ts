// Input: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3)

export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let count = 0
  let temp2 = m - 1

  while (count < n) {
    const lastNum = nums2.shift()

    if (!lastNum) {
      count++
      break
    }

    const lastNum1 = nums1[temp2]

    if (lastNum <= lastNum1) {
      const temp = nums1[temp2]
      nums1[temp2] = lastNum
      nums1[temp2 + 1] = temp

      temp2++
      count++
      continue
    }

    if (lastNum >= lastNum1 || !lastNum1) {
      nums1[temp2 + 1] = lastNum

      temp2++
      count++
      continue
    }

    temp2--
    count++
  }
}
