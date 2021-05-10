export function getFormattedMonth(month) {
    const formattedMonth = (month + '').length === 1
    ?
    `0${month + 1}`
    :
    month + 1;

    return formattedMonth;
}

export function getFormattedDay(day) {
    const formattedDay = (day + '').length === 1
    ?
    `0${day + 1}`
    :
    day;

    return formattedDay;
}

export function getCurrentDate() {
  const date = new Date()
  const day = getFormattedDay(date.getDate())
  const month = getFormattedMonth(date.getMonth()) 
  const year = date.getFullYear()
  
  const currentDate = `${year}-${month}-${day}`
  return currentDate
}
