// fetching data from index.html
       var getMilliseconds = document.getElementById('milliseconds');
       var getSeconds = document.getElementById('seconds');
       var getMinutes = document.getElementById('minutes');
       var start = document.getElementById('start');
       var stop = document.getElementById('stop');
       var reset = document.getElementById('reset');
      
//   declare variables for count time in stopwatch 
       var interval;
       var milliseconds=0;
       var seconds=0;
       var minutes=0;


// function for calculate time in stopwatch when it is started
       function timerStart(){
        milliseconds++;
        if (milliseconds<=9) {
            getMilliseconds.innerText="0"+milliseconds;
        }
        
        if (milliseconds>9) {
            getMilliseconds.innerText=milliseconds;
         }
         if (milliseconds>99) {
            seconds++;
            getSeconds.innerText="0"+seconds;
           milliseconds=0;
            getMilliseconds.innerText="0"+0;
        }

        if (seconds<=9) {
            getSeconds.innerText="0"+seconds;
        }
         if (seconds>9) {
            getSeconds.innerText=seconds;
         }
        if (seconds>59) {
            minutes++;
            getMinutes.innerText="0"+minutes;
            seconds=0;
            getSeconds.innerText="0"+0;
        }

        if (minutes>9) {
            getMinutes.innerText=minutes;
        }
    }

// adding onclick event when start button is clicked 
        start.onclick=function(){
            interval=setInterval(timerStart,10);
        };

 // adding onclick event when stop button is clicked 
        stop.onclick=function(){
           clearInterval(interval);
        };
        
 // adding onclick event when restart button is clicked 
        reset.onclick=function() {
            clearInterval(interval);
            milliseconds="00";
            seconds="0";
            minutes="00";
            getMilliseconds.innerText=milliseconds;
            getSeconds.innerText=seconds;
            getMinutes.innerText=minutes;
        };