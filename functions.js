const buttons = document.getElementsByClassName("button");
const telefon = document.getElementsByClassName("nr-telefon");
let firstLoad = true;

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

telefon[0].addEventListener('click',(e)=>{
    navigator.clipboard.writeText(nrTelefon)
})