var hour = 0;
var minute = 0;
var second = 0;
var miliseconds = 0;
var timer = null;

function updateDisplay(){
    let h = hour < 10? "0" + hour : hour;
    let m = minute < 10? "0"+ minute : minute;
    let s = second < 10? "0" + second : second;
    let ms = Math.floor(miliseconds / 100);

    document.getElementById("time").innerText = `${h}:${m}:${s}.${ms}`;

}
document.getElementById("start").addEventListener("click", ()=>{
    if (timer !== null) return;

    timer = setInterval(()=>{
        miliseconds += 10;

    if (miliseconds===1000){
        miliseconds = 0;
        second++;
    }



        if (second === 60){
            second = 0;
            minute++;
    
        }

        if(minute ===60){
            minute = 0;
            hour++;
        }

        updateDisplay();
    }, 10);

})
document.getElementById("stop").addEventListener("click" , () => {
clearInterval(timer);
timer = null;
});

document.getElementById("Reset").addEventListener("click" , () =>{
    clearInterval(timer);
    timer = null;
    hour = 0;
    minute = 0;
    second = 0;
    miliseconds = 0;
    updateDisplay();
});
    