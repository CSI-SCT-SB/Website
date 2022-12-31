const copyButton = document.getElementsByClassName("copy-clipboard");
var link = "https://ajithrt007.github.io/CSI-SCTSB/event-details.html";
for(let i=0; i< expandButtons.length;i++){
    copyButton[i].addEventListener("click",function(){
        let idName = this.parentElement.parentElement.parentElement.parentElement.id;
        // postableText = content.trim();
        // postableText = postableText + '#' + idName;
        console.log(link + '#' + idName);
        navigator.clipboard.writeText(link + '#' + idName);
        alert("Event link copied to clipboard!!");         
    });
}