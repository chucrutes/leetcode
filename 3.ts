type LetterExists = Map<string, number>

const isLetterAlreadyUsed = (letter: string, lettersUsed: LetterExists) => {
  return lettersUsed.get(letter)
}

const findBiggestNum = (substring: number[]) => {
  const biggestNum = substring.reduce((prev, current) => {
    return prev > current ? prev : current
  }, 0)

  return biggestNum
}

export function lengthOfLongestSubstring(s: string): number {
  const lettersUsed = new Map<string, number>()
  const substringLengths: number[] = []
  const strLength = s.length

  let index = 0
  let length = 0

  while (index <= strLength) {
    const currentChar = s[index]

    const indexUsed = isLetterAlreadyUsed(currentChar, lettersUsed)

    if (indexUsed !== undefined) {
      substringLengths.push(length)
      index = indexUsed
      length = 1
      lettersUsed.clear()
    }
    lettersUsed.set(currentChar, index)

    length++
    index++
  }
  substringLengths.push(length)

  return findBiggestNum(substringLengths)
}

console.log(lengthOfLongestSubstring('abb'))
