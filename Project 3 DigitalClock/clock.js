const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock');



setInterval(function(){// Set an interval to update the clock every second
    const date = new Date(); // Get the current date and time
    clock.innerHTML = date.toLocaleTimeString(); // Update the clock element with the current time in a localized format    
},1000 ); // 1000 milliseconds = 1 second

