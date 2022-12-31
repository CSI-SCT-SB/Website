//code for changing color of hamburger icon
const hamburgerIcon = document.querySelector('.moreIcon');
const linesHamburgerIcon = document.querySelector('.hamburgerIcon').children;
function removeClass(){
    hamburgerIcon.classList.remove("moreIconAnimation");
}
function moreIconAnimation(){
    hamburgerIcon.classList.add("moreIconAnimation");
    setTimeout(removeClass,1000);
}

//state normal, color white
function black(){
    for(var j = 0; j< linesHamburgerIcon.length; j++){
        linesHamburgerIcon[j].style.backgroundColor = "black";
    }
    moreIconColor = "white";
    moreIconAnimation();
}
//state inverse, color black
function white(){
    for(var j = 0; j< linesHamburgerIcon.length; j++){
        linesHamburgerIcon[j].style.backgroundColor = "whitesmoke";
    }
    moreIconColor = "black";
    moreIconAnimation();
}

white();

const optionScreen = document.querySelector(".more-icon-screen");
var hamburgerState = false;

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

function closeMenu(){
    optionScreen.style.display = "none";
    body.style.overflowY = "unset";
    line1.classList.remove("animatedLine1");
    line2.classList.remove("animatedLine2");
    line3.classList.remove("animatedLine3");
    document.querySelector('.hamburgerIcon').style.display = "flex";
    hamburgerState = false;
    white();
}


hamburgerIcon.addEventListener("click",function(){
    if(!hamburgerState){        
        optionScreen.style.display = "flex";
        body.style.overflowY = "hidden";
        line1.classList.add("animatedLine1");
        line2.classList.add("animatedLine2");
        line3.classList.add("animatedLine3");
        document.querySelector('.hamburgerIcon').style.display = "unset";
        document.querySelector('.hamburgerIcon').style.position = "relative";
        hamburgerState = true;
        black();
    }
    else{
        closeMenu();        
    }
});