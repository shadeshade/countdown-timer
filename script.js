const newYearsDate = '2021-12-31'
const newYearsTime = '23:59:59'
const monthsEl = document.getElementById('months')
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


function countdown(date, time) {
    const today = new Date();

    const currentMonth = today.getMonth() + 1
    const currentDate = today.getDate()
    const currentHours = today.getHours()
    const currentMinutes = today.getMinutes()
    const currentSeconds = today.getSeconds()

    const splitedDate = date.split('-')
    const splitedTime = time.split(':')

    const parsedMonth = parseInt(splitedDate[1])
    const parsedDate = parseInt(splitedDate[2])
    const parsedHours = parseInt(splitedTime[0])
    const parsedMinutes = parseInt(splitedTime[1])
    const parsedSeconds = parseInt(splitedTime[2])

    const months = parsedMonth - currentMonth
    const days = parsedDate - currentDate
    const hours = parsedHours - currentHours
    const mins = parsedMinutes - currentMinutes
    const seconds = parsedSeconds - currentSeconds

    monthsEl.innerHTML = formatDateTime(months)
    daysEl.innerHTML = formatDateTime(days)
    hoursEl.innerHTML = formatDateTime(hours)
    minsEl.innerHTML = formatDateTime(mins)
    secondsEl.innerHTML = formatDateTime(seconds)
}

function formatDateTime(dateTime) {
    return dateTime >= 10 ? dateTime : '0' + dateTime
}

setInterval(countdown, 1000, newYearsDate, newYearsTime)