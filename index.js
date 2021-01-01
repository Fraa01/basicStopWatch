
window.onload = function (){


    var seconds = 00
    var tens = 00
    var appendSeconds = document.getElementById("seconds");
    var appendtens = document.getElementById("decimals");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var interval;

    //set up the start, stop, and reset button.
    start.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10); 
    }

    stop.onclick = function(){
        clearInterval(interval);
    }

    reset.onclick = function(){
        clearInterval(interval);
        seconds = "00";
        tens = "00";
        appendSeconds.innerHTML = seconds;
        appendtens.innerHTML = tens;
    }
    
    function startTimer(){
        tens++;

        //adds the zero for numbers smaller than 10.
        if (tens < 10){
            appendtens.innerHTML = "0" + tens;
        }
        else if (tens >= 10){
            appendtens.innerHTML = tens;
        
        }
        //once reached 99 it goes to the seconds.
        if (tens > 99){
            tens = 0;
            console.log("seconds");
            seconds++;
            //adds the 0 for number smaller than 10.
            if (seconds < 10){
                appendSeconds.innerHTML = "0" + seconds;
            }
            else if (seconds >= 10){
                appendSeconds.innerHTML = seconds;
            }
            if (seconds > 59){
                seconds = 0;
            }
            
            
        }

    }
    
}
//TODO add laps.
