function reverse(x: number): number {
  const isNegative = x < 0
  let newNum = Math.abs(x)
  let value = 0

  while (newNum !== 0) {
    const remaining = newNum % 10

    newNum = Math.floor(newNum / 10)
    value = value * 10 + remaining
  }

  const res = isNegative ? value + value * -2 : value
  return res
}

export const isPalindrome = (x: number): boolean => {
  if (x < 0) {
    return false
  }

  if (reverse(x) - x === 0) {
    return true
  }

  return false
}
