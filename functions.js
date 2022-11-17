const buttons = document.getElementsByClassName("button");
const telefon = document.getElementById("nr-telefon");
const promotii = document.getElementsByClassName("primul-mesaj");
const reclamatii = document.getElementsByClassName("reclamatii");
const contact = document.getElementsByClassName("contact");
const feReclamatii = document.getElementById("fereastraReclamatii");
const modal = document.getElementById("modal");

let firstLoad = true;
let textCopied = false;
let nrTelefon = "2222.222.222";


if(firstLoad)
{
    $("#view").load("pagini/pizza.html");
    firstLoad = false;
}

buttons[0].addEventListener('click', (e) =>{
    $("#view").load("pagini/pizza.html"); 
})
        
buttons[1].addEventListener('click', (e) =>{
    $("#view").load("pagini/paste.html");    
})
buttons[2].addEventListener('click', (e) =>{
    $("#view").load("pagini/salate.html");     
})
buttons[3].addEventListener('click', (e) =>{
    $("#view").load("pagini/desert.html");     
})
buttons[4].addEventListener('click', (e) =>{
    $("#view").load("pagini/bauturi.html");    
})
promotii[0].addEventListener('click', (e) =>{
    $("#view").load("pagini/promotii.html");    
})
reclamatii[0].addEventListener('click', (e) =>{
    setTimeout(function() {
        modal.style.display="flex";
      }, 100);
    

})

telefon.addEventListener('click',(e)=>{
    navigator.clipboard.writeText(nrTelefon);
    if(textCopied==false){
        let clipC = document.createElement("div");
        clipC.setAttribute("id", "clipboardNr");
        clipC.innerHTML = "Copiat";
        document.body.appendChild(clipC);
        clipC.style.left = event.clientX + 10 + 'px';
        clipC.style.top = event.clientY + 10 + 'px';
        textCopied = true;
        let delayInMilliseconds = 500; 
        setTimeout(function() {
          clipC.parentNode.removeChild(clipC);
          textCopied = false;
        }, delayInMilliseconds);
    }
})

window.onclick = function(event){
    if(event.target !=feReclamatii && event.target != document.getElementById("fname")
      && event.target != document.getElementById("email")
      && event.target != document.getElementById("mesaj"))
    {
        modal.style.display="none";
    }
}
