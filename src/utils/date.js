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