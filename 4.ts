const convertString = (palindrome: string) => {
  const palindromeLength = palindrome.length
  const strArr = new Array<string>(palindromeLength).fill('')
  const isOddOrNot = isOdd(palindromeLength)
  const middleOfArr = Math.floor(palindromeLength / 2)

  let tempString = palindrome

  for (let index = 0; index < palindromeLength / 2; index++) {
    if (isOddOrNot && index === middleOfArr) {
      strArr[index] = tempString[0]
      break
    }

    strArr[index] = tempString[0]
    strArr[palindromeLength - 1 - index] = tempString[1]

    tempString = tempString.slice(2)
  }

  return strArr.filter(Boolean).reduce((prev, current) => {
    return `${prev}${current}`
  }, '')
}

const isOdd = (num: number) => !isEven(num)
const isEven = (num: number) => num % 2 === 0

export const longestPalindrome = (s: string): string => {
  const pureStr = s.replace(' ', '').toLowerCase()
  const pureStrLength = pureStr.length
  let start = 0
  let end = pureStrLength - 1
  let palindrome = ''

  let count = 0

  while (count < pureStrLength) {
    const startLetter = pureStr[start]
    const endLetter = pureStr[end]

    if (start >= end && !isEven(pureStrLength)) {
      palindrome += startLetter
      break
    }
    if (start >= end && isEven(pureStrLength)) {
      break
    }

    if (startLetter === endLetter) {
      palindrome += startLetter + endLetter
      start++
      end--
      count++

      continue
    }

    palindrome = ''
    count++
    start++
    end--
  }

  palindrome = convertString(palindrome)

  return palindrome
}
