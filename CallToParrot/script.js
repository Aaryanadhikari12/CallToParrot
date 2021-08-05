

function invisible(){

 document.getElementById("title").style.visibility="hidden"; 
 document.getElementById("main").style.visibility="visible";
const ring = document.querySelector("audio");
ring.play();


}
function visible(){
const hide = document.getElementById("title").style.visibility="visible"; 

}
function endcall(){

const end = document.getElementById("cut");
const stop =document.querySelector("audio");
stop.pause();
document.getElementById("title").style.visibility="visible"; 
document.getElementById("main").style.visibility="hidden";
const mainaudio = document.getElementById("audio");
mainaudio.pause();
document.getElementById('recieve').style.visibility="";


}
function totapa(){

const callplay = document.getElementById("recieve");
const stop = document.querySelector("audio");
stop.pause();
const mainaudio = document.getElementById("audio");
mainaudio.play();

document.getElementById('recieve').style.visibility="hidden";
document.getElementById('cut').style.margin="0 40px auto;";


}


