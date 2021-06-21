setInterval(function(){
    var current = new Date()
    var future = new Date("21 july 2021")
    var difference = future - current
    var days = Math.floor(difference / (1000 * 60 * 60 * 24))
    var hours = Math.floor(difference / (1000 * 60 * 60)) 
    var minute = Math.floor(difference / (1000 * 60))
    var seconds = Math.floor(difference / (1000))
    
    
    var day = document.getElementById("day")
    day.innerHTML = days
    
    var hour = document.getElementById("hour")
    hour.innerHTML = hours
    
    var min = document.getElementById("min")
    min.innerHTML = minute
    
    var sec = document.getElementById("sec")
    sec.innerHTML = seconds
},1000)