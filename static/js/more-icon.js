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
function white(){
    hamburgerIcon.style.backgroundColor = "whitesmoke";
    for(var j = 0; j< linesHamburgerIcon.length; j++){
        linesHamburgerIcon[j].style.backgroundColor = "black";
    }
    moreIconColor = "white";
    moreIconAnimation();
}
//state inverse, color black
function black(){
    hamburgerIcon.style.backgroundColor = "black";
    for(var j = 0; j< linesHamburgerIcon.length; j++){
        linesHamburgerIcon[j].style.backgroundColor = "whitesmoke";
    }
    moreIconColor = "black";
    moreIconAnimation();
}

const seperators = document.getElementsByClassName('seperator');
white();
var moreIconColor = "white";
window.addEventListener("scroll",function(){    
    if(this.window.scrollY == 0){
        white();
    }
    else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        black();
    }
    else if(window.scrollY > seperators[0].offsetTop && window.scrollY < seperators[1].offsetTop){
        white();
        //landing
    }
    else if(window.scrollY > seperators[1].offsetTop && window.scrollY < seperators[2].offsetTop){
        black();
        //about
    }
    else if(window.scrollY > seperators[2].offsetTop && window.scrollY < seperators[3].offsetTop){
        white();
        //events
    }
    else if(window.scrollY > seperators[3].offsetTop && window.scrollY < seperators[4].offsetTop){
        black();
        //team
    }
    else if(window.scrollY > seperators[4].offsetTop && window.scrollY < seperators[5].offsetTop){
        white();
        //gallery
    }
    else if(window.scrollY > seperators[5].offsetTop && window.scrollY < seperators[6].offsetTop){
        black();
        //keynotes
    }
    else{
        console.log("fgggg");
    }
});



const optionScreen = document.querySelector(".more-icon-screen");
var hamburgerState = false;
var colorState;

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

function closeMenu(){
    optionScreen.style.display = "none";
    body.style.overflowY = "unset";
    line1.style.animation = "line1 1s backwards";
    line2.style.animation = "line2 1s backwards";
    line3.style.animation = "line3 1s backwards";
    line1.classList.remove("animatedLine1");
    line2.classList.remove("animatedLine2");
    line3.classList.remove("animatedLine3");
    document.querySelector('.hamburgerIcon').style.display = "flex";
    hamburgerState = false;
    if(colorState == "white"){
        white();
    }
}


hamburgerIcon.addEventListener("click",function(){
    if(!hamburgerState){        
        optionScreen.style.display = "flex";
        body.style.overflowY = "hidden";
        line1.style.animation = "line1 1s";
        line2.style.animation = "line2 1s";
        line3.style.animation = "line3 1s";
        line1.classList.add("animatedLine1");
        line2.classList.add("animatedLine2");
        line3.classList.add("animatedLine3");
        document.querySelector('.hamburgerIcon').style.display = "unset";
        document.querySelector('.hamburgerIcon').style.position = "relative";
        hamburgerState = true;
        colorState = moreIconColor;
        black();
    }
    else{
        closeMenu();        
    }
});



