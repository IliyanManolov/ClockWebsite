const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")
const noonEl = document.getElementById("noon")

function updateClock(){
  let hour = new Date().getHours()
  let minute = new Date().getMinutes()
  let second = new Date().getSeconds()

  let noon = "AM"

  if (hour > 12){
    hour = hour - 12
    noon = "PM"
  }

  if (hour < 10){
    hour = "0" + hour
  }

  if (minute < 10){
    minute = "0" + minute
  }

  if (second < 10){
    second = "0" + second
  }

  hourEl.innerText = hour
  minuteEl.innerText = minute
  secondEl.innerText = second
  noonEl.innerText = noon
  setTimeout(()=> {
    updateClock()
  }, 1000)
}

updateClock()