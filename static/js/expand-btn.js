const expandButtons = document.getElementsByClassName("extend-btn");
const events = document.getElementsByClassName("event");
const contentPart = document.getElementsByClassName("content-part");
var flag = [];
for(let i=0; i< expandButtons.length;i++){
    flag[i] = 0;
}
for(let i=0; i< expandButtons.length;i++){
    expandButtons[i].addEventListener("click",function(){
        if(flag[i]==0){
            flag[i] = 1;
            expandButtons[i].style.transform = "rotate(180deg)";
            events[i].classList.add("jsClassForEvent");
            contentPart[i].classList.add("jsClassForContentPart");
        }
        else{
            flag[i] = 0;
            expandButtons[i].style.transform = "rotate(0deg)";
            events[i].classList.remove("jsClassForEvent");
            contentPart[i].classList.remove("jsClassForContentPart");
        }
        
    });
}