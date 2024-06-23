var len=document.querySelectorAll(".drum").length;

for(var i=0; i<len; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handle);
}
function handle(){

alert("i got clickrd");
}