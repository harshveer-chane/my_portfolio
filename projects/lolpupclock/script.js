let whatTime = ['default']
let partyTimeToggle = ['false']
let status = ['default']

const clock = () => {
    let localTime = new Date()
    let time = localTime.toLocaleTimeString()
    document.getElementById("localClock").innerHTML = time
    setTimeout(clock, 1000)
}

const updateImageAndEvent = () => {
    let fetchImage = document.getElementById("main_image")
    let fetchEventAttribute = document.getElementById("event_message")
    if(partyTimeToggle[0] === 'false') 
    if(whatTime[0] === 'goodnight') {
        image = "https://lolpupclock.imfast.io/assets/night.gif"
        event = "Good Night"
    } else if (whatTime[0] === 'eatingtime') {
        image = "https://lolpupclock.imfast.io/assets/eat.gif"
        event = "Eating Time"
    } else if (whatTime[0] === 'sleepingtime') {
        image = "https://lolpupclock.imfast.io/assets/sleep.gif"
        event = "Sleeping Time"
    } else if (whatTime[0] === 'goodmorning') {
        image = "https://lolpupclock.imfast.io/assets/morning.gif"
        event = "Good Morning"
    } else if (whatTime[0] === 'goodafternoon') {
        image = "https://lolpupclock.imfast.io/assets/afternoon.gif"
        event = "Good Afternoon"
    } else if (whatTime[0] === 'goodevening') {
        image = "https://lolpupclock.imfast.io/assets/evening.gif"
        event = "Good Evening"
    } 
    fetchEventAttribute.innerText = event
    fetchImage.src = image
    setTimeout(updateImageAndEvent, 5000)
}

const setTimeEvent = () => {
  var time = new Date()
  let h = time.getHours()
  const array = whatTime
  var goodNight = []

  if (h >= 21 && h <= 23 ) {
    goodNight.push("true")
  }
  if(h >= 5 && h < 12) {
    array.splice(0, 1, 'goodmorning')
  } else if (h >= 12 && h < 18) {
    array.splice(0, 1, 'goodafternoon')
  } else if (h >= 18 && h < 21) {
    array.splice(0, 1, 'goodevening')
  } else if (h >= 0 || goodNight[0] === 'true') {
    array.splice(0, 1, 'goodnight')
  }
  setTimeout(setTimeEvent, 1000)

}

const setPartyTime = () => {
  var array = whatTime
  var arrayParty = partyTimeToggle
  var fetchBody = document.body
  fetchBody.classList.toggle("on")
  array.splice(0, 1, 'partytime')

  let fetchImage = document.getElementById("main_image")
  let fetchEventAttribute = document.getElementById("event_message")

  if (whatTime[0] === 'partytime') {
     image = "https://lolpupclock.imfast.io/assets/dance.gif"
     event = "PARTY TIME!!" 
  }
   
  if (partyTimeToggle[0] === 'false') {
     arrayParty.splice(0, 1, 'true')
  }  else if (partyTimeToggle[0] === 'true') {
     arrayParty.splice(0, 1, 'false')
     image = "https://lolpupclock.imfast.io/assets/main.webp"
     event = "Howdy Partner!" 
    }
  fetchEventAttribute.innerText = event
  fetchImage.src = image
}

const colorPalette = (statusCheck) => {
  if (statusCheck === 'default') {
    var fetchAssetOne = document.getElementById("title_clock")
    fetchAssetOne.classList.toggle("on")
    var fetchAssetTwo = document.getElementById("title")
    fetchAssetTwo.classList.toggle("on")
    var fetchAssetThree = document.getElementById("localClock")
    fetchAssetThree.classList.toggle("on")
  }
}

const colorSwitcher = (value) => {
  colorPalette(status[0])
  if(value === 1) {
    color = "#E27D60"
    status.splice(0, 1, 'locked')
  } else if (value === 2) {
    color = "#659DBD"
    status.splice(0, 1, 'locked')
  } else if (value === 3) {
    color = "#E8A87C"
    status.splice(0, 1, 'locked')
  } else if (value === 4) {
    color = "#C38D9E"
    status.splice(0, 1, 'locked')
  } else if (value === 5) {
    color = "#99738E"
    status.splice(0, 1, 'locked')
  } else if (value === 6) {
    color = "#8EE4AF"
    status.splice(0, 1, 'locked')
  }

  document.body.style.backgroundColor = color;
}




clock()
setTimeEvent()
updateImageAndEvent()


//version 1 (backup)

/*let whatTime = ['default']

const clock = () => {
    let localTime = new Date()
    let time = localTime.toLocaleTimeString()
    document.getElementById("localClock").innerHTML = time
    setTimeout(clock, 1000)
}

const updateImageAndEvent = () => {
    let fetchImage = document.getElementById("main_image")
    let fetchEventAttribute = document.getElementById("event_message")
    let fetchBackgroundBody = document.body.style;
    if(whatTime[0] === 'partytime') {
        image = "https://lolpupclock.imfast.io/dance.gif"
        event = "PARTY TIME!!"
    } else if (whatTime[0] === 'eatingtime') {
        image = "https://lolpupclock.imfast.io/eat.gif"
        event = "Eating Time"
    } else if (whatTime[0] === 'sleepingtime') {
        image = "https://lolpupclock.imfast.io/sleep.gif"
        event = "Sleeping Time"
    } else if (whatTime[0] === 'goodmorning') {
        image = "https://lolpupclock.imfast.io/morning.gif"
        event = "Good Morning"
    } else if (whatTime[0] === 'goodafternoon') {
        image = "https://lolpupclock.imfast.io/afternoon.gif"
        event = "Good Afternoon"
    } else if (whatTime[0] === 'goodevening') {
        image = "https://lolpupclock.imfast.io/evening.gif"
        event = "Good Evening"
    } else if (whatTime[0] === 'goodnight') {
        image = "https://lolpupclock.imfast.io/night.gif"
        event = "Good Night"
    } else if (whatTime[0] === 'default') {
        image = "https://lolpupclock.imfast.io/main.webp"
        event = "Howdy Partner!"
    }
    fetchEventAttribute.innerText = event
    fetchImage.src = image
    //fetchBackgroundBody.background = color
    setTimeout(updateImageAndEvent, 1000)
}

const setTimeEvent = () => {
  var time = new Date()
  let h = time.getHours()
  const array = whatTime
  var goodNight = []

  if (h >= 21 && h <= 23 ) {
    goodNight.push("true")
  }
  if(h >= 5 && h < 12) {
    array.splice(0, 1, 'goodmorning')
  } else if (h >= 12 && h < 18) {
    array.splice(0, 1, 'goodafternoon')
  } else if (h >= 18 && h < 21) {
    array.splice(0, 1, 'goodevening')
  } else if (h >= 0 || goodNight[0] === 'true') {
    array.splice(0, 1, 'goodnight')
  }
  setTimeout(setTimeEvent, 1000)
  return h
}

const setPartyTime = () => {
  var array = whatTime
  var fetchBody = document.body
  fetchBody.classList.toggle("on")
  array.splice(0, 1, 'partytime')
}


clock()
setTimeEvent()
updateImageAndEvent()
console.log(whatTime)*/
