let h=document.getElementById("hrs")
let m=document.getElementById("min")
let s=document.getElementById("sec")


setInterval(() => {
    let currentTime=new Date();
h.innerHTML=currentTime.getHours();
m.innerHTML=currentTime.getMinutes();
s.innerHTML=currentTime.getSeconds();

},1000);

