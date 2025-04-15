type MergeSort = number[]

function mergeSort(nums: MergeSort): MergeSort {
  const { length } = nums

  if (length === 1) {
    return nums
  }

  const middleOfArray = Math.floor(length / 2)
  const left = nums.slice(0, middleOfArray)
  const right = nums.slice(middleOfArray)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left: MergeSort, right: MergeSort): MergeSort {
  const merged = []

  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    const leftValue = left[indexLeft]
    const rightValue = right[indexRight]

    if (leftValue <= rightValue) {
      merged.push(leftValue)

      indexLeft++
      continue
    }

    merged.push(rightValue)

    indexRight++
  }

  return merged.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

console.log(mergeSort([1, 2, 3, 2, 5, 6]))
