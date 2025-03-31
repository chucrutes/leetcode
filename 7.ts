function is32BitInteger(num: number) {
  return Number.isInteger(num) && num >= -2147483648 && num <= 2147483647
}

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
  const finalRes = is32BitInteger(res) ? res : 0
  return finalRes
}
