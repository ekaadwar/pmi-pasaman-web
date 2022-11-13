export const typeConverter = (bloodCode) => {
  let blood = ''
  if (bloodCode) {
    let splitData = bloodCode.split('')
    const length = splitData.length

    if (splitData[length - 1] === '1') {
      splitData[length - 1] = '+'
    } else if (splitData[length - 1] === '2') {
      splitData[length - 1] = '-'
    }

    for (let i = 0; i < length; i++) {
      blood += splitData[i]
    }

    return blood.toUpperCase()
  } else {
    blood = '-'
    return blood
  }
}

export const typeDeConverter = (bloodCode) => {
  let splitData = bloodCode.split('')
  const length = splitData.length
  let blood = ''

  if (splitData[length - 1] === '+') {
    splitData[length - 1] = '1'
  } else if (splitData[length - 1] === '-') {
    splitData[length - 1] = '2'
  }

  for (let i = 0; i < length; i++) {
    blood += splitData[i]
  }

  return blood.toUpperCase()
}
