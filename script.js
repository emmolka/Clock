$(document).ready(function(){
let date,hour,minute,second;

date= new Date();
second=date.getSeconds();
minute=date.getMinutes();
hour=date.getHours();
 
console.log(hour,minute,second);
    
function clock(){
    second++;
    if(second==60){
        second=0;
        minute++;
        if(minute==60){
            minute=0;
            hour++;
            if(hour==24){
                hour=0;
            }
        }
    }
    document.getElementById("min").innerHTML=minute;    
document.getElementById("sec").innerHTML=second;    
document.getElementById("hr").innerHTML=hour;   
animate=setTimeout(clock,1000);
};
clock();






});
