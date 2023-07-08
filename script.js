//document.querySelector("h1").style.color="red";
document.querySelector(".btn").addEventListener("click",fun1);

function fun1(){
    randomC= Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background="#"+randomC;
    document.querySelector("#hex-code").innerHTML=randomC;
}