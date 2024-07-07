// sol1---------------------start------------------------


// var len=document.querySelectorAll(".drum").length;

// for(var i=0; i<len; i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",handle);
// }
// function handle(){

//     var buttonName=this.innerHTML;
//     switch(buttonName){
//         case "w":
//                 playSound("./sounds/crash.mp3");
//                 break;
//         case "a":
//             playSound("./sounds/tom-4.mp3");
//                 break;
//         case "s":
//             playSound("./sounds/snare.mp3");
//                 break;
//         case "d":
//             playSound("./sounds/tom-1.mp3");
//                 break;
//         case "j":
//             playSound("./sounds/tom-2.mp3");
//                 break;
//         case "k":
//             playSound("./sounds/tom-3.mp3");
//                 break;
//         case "l":
//             playSound("./sounds/kick-bass.mp3");
//                 break;
//         default:
//             console.log("invalid button");



//     }


// function playSound(location){
// var sound=new Audio(location);
//     sound.play();
// }
// }

// sol1---------------------end------------------------








// sol2---------------------start------------------------

var len=document.querySelectorAll(".drum").length;

for(var i=0; i<len; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handle);

function handle(){

    var buttonName=this.innerHTML;
    makesound(buttonName);
    buttonAnimation(buttonName);
   
}
}

document.addEventListener("keydown", function(event){

    makesound(event.key);
    buttonAnimation(event.key);
 });




    function makesound(key){
        switch(key){
            case "w":
                    var crash=new Audio("./sounds/crash.mp3");
                    crash.play();
                    break;
            case "a":
                var tom4=new Audio("./sounds/tom-4.mp3");
                tom4.play();
                    break;
            case "s":
                var snare=new Audio("./sounds/snare.mp3");
                snare.play();
                    break;
            case "d":
                var tom1=new Audio("./sounds/tom-1.mp3");
                tom1.play();
                    break;
            case "j":
                var tom2=new Audio("./sounds/tom-2.mp3");
                tom2.play();
                    break;
            case "k":
                var tom3=new Audio("./sounds/tom-3.mp3");
                tom3.play();
                    break;
            case "l":
                var kick=new Audio("./sounds/kick-bass.mp3");
                kick.play();
                    break;
            default:
                console.log("invalid button");
        }

    }


    function buttonAnimation(currentKey){
        var activeButton=document.querySelector("."+currentKey);
        activeButton.classList.add("pressed"); // add class in the html(the functionof this class  is already defined in style.css (.pressed{....}) ) to make button light up

        setTimeout(function(){
            activeButton.classList.remove("pressed");// remove class(pressed) from html after 100ms to make button light down again. pressed class is defined in style.css (.pressed{....}) )
        }, 100);

    }

// sol2---------------------end------------------------




