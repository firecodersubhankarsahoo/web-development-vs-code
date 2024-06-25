var len=document.querySelectorAll(".drum").length;

for(var i=0; i<len; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handle);
}
function handle(){

    var buttonName=this.innerHTML;
    switch(buttonName){
        case "w":
                playSound("./sounds/crash.mp3");
                break;
        case "a":
            playSound("./sounds/tom-4.mp3");
                break;
        case "s":
            playSound("./sounds/snare.mp3");
                break;
        case "d":
            playSound("./sounds/tom-1.mp3");
                break;
        case "j":
            playSound("./sounds/tom-2.mp3");
                break;
        case "k":
            playSound("./sounds/tom-3.mp3");
                break;
        case "l":
            playSound("./sounds/kick-bass.mp3");
                break;
        default:
            console.log("invalid button");



    }


function playSound(location){
var sound=new Audio(location);
    sound.play();
}




    

}

