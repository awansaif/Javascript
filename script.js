setInterval(() => {
    const time = document.querySelector("#time")
    let date = new Date()
    let hours = date.getHours()
    let mins = date.getMinutes()
    let seconds = date.getSeconds()
    let dayTime = 'AM' 
    if(hours > 12)
    {
        datTime = 'PM'
        hours = hours - 12
    }
    if(hours < 12)
    {
        hours = "0" + hours
    }
    if(mins < 10)
    {
        mins = "0" + mins
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds
    }
    time.textContent = hours + ':' + mins + ':' + seconds + " " + dayTime
});