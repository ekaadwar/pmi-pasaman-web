const getFullMonth = (dateData) => {
  let month
  switch (dateData) {
    case 0:
      month = 'Januari'
      break
    case 1:
      month = 'Februari'
      break
    case 2:
      month = 'Maret'
      break
    case 3:
      month = 'April'
      break
    case 4:
      month = 'Mei'
      break
    case 5:
      month = 'Juni'
      break
    case 6:
      month = 'Juli'
      break
    case 7:
      month = 'Agustus'
      break
    case 8:
      month = 'September'
      break
    case 9:
      month = 'Oktober'
      break
    case 10:
      month = 'November'
      break
    case 11:
      month = 'Desember'
      break
    default:
      'undefined'
  }
  return month
}

export const yyyymmdd = (dateData = null) => {
  let fullDate

  if (dateData === null) {
    fullDate = new Date()
  } else {
    fullDate = dateData
  }

  const date = fullDate.getDate()
  const month = fullDate.getMonth() + 1
  const year = fullDate.getFullYear()

  const result = `${year}-${month}-${date}`

  return result
}

export const ddmmmmyyyy = (dateData = null) => {
  let fullDate

  if (dateData === null) {
    fullDate = new Date()
  } else {
    fullDate = dateData
  }

  const date = fullDate.getDate()
  const month = getFullMonth(fullDate.getMonth())
  const year = fullDate.getFullYear()

  const result = `${date} ${month} ${year}`

  return result
}
