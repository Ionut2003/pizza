const buttons = document.getElementsByClassName('button');

let firstLoad = true;

if(firstLoad)
{
    $("#view").load("pizza.html");
    firstLoad = false;
}

buttons[0].addEventListener('click', (e) =>{
    $("#view").load("pizza.html"); 
})
        
buttons[1].addEventListener('click', (e) =>{
    $("#view").load("paste.html");    
})
buttons[2].addEventListener('click', (e) =>{
    $("#view").load("salate.html");     
})
buttons[3].addEventListener('click', (e) =>{
    $("#view").load("desert.html");     
})
buttons[4].addEventListener('click', (e) =>{
    $("#view").load("bauturi.html");    
})