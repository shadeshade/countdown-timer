const newYears = '1 Jan 2022'
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds % 3600 / 60)
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = formatDateTime(days)
    hoursEl.innerHTML = formatDateTime(hours)
    minsEl.innerHTML = formatDateTime(mins)
    secondsEl.innerHTML = formatDateTime(seconds)
}

function formatDateTime(dateTime) {
    return dateTime >= 10 ? dateTime : '0' + dateTime
}

setInterval(countdown, 1000)