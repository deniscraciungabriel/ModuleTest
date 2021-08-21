
const Video = document.getElementById("Video");
const Button = document.getElementById("Button");

function ShowHide(module){
    var Invisible = document.getElementById(`Invisible${module}`) 
    if(Invisible.style.display == "block"){
        Invisible.style.display = "none";
    }
    else{
        Invisible.style.display = "block";
    }
    
}



async function ShowButton(){
    if (Video.currentTime > (Video.duration -5)){
        Button.style.display = "block"; 
    }
}
ShowButton()