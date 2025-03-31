type LetterExists = Map<string, number>

const isLetterAlreadyUsed = (letter: string, lettersUsed: LetterExists) => {
  if (!letter) return
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

  if (strLength <= 1) {
    return strLength
  }

  let index = 0
  let substringLength = 0
  let start = 0

  while (index < strLength) {
    const currentChar = s[index]

    const letterAlreadyUsed = isLetterAlreadyUsed(currentChar, lettersUsed)
    if (letterAlreadyUsed === undefined) {
      substringLength++
      index++
      lettersUsed.set(currentChar, index)
    } else {
      substringLengths.push(substringLength)
      lettersUsed.clear()
      substringLength = 0
      start++
      index = start
    }
  }
  if (substringLength > 0) {
    substringLengths.push(substringLength)
  }

  return findBiggestNum(substringLengths)
}
