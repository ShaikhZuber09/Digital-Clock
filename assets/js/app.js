function SetZero(num){
    if(num<10){
       return '0'+ num;
    }
    else{
        return num;
    }
}
function CreateDigitalClock(){
    const clock=document.getElementById("clock")

    let d=new Date();
    let hr =d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let session="AM";
    if(hr==12){
        session="PM";
    }
    if(hr>12){
        session="PM";
        hr=hr-12;
    }
   
    
    
    
    clock.innerHTML=`${ SetZero(hr)}:${SetZero(min)}:${SetZero(sec)} ${session}`
    setTimeout(CreateDigitalClock, 300);
}

CreateDigitalClock();