const buttons = document.getElementsByClassName("button");
const telefon = document.getElementById("nr-telefon");
const promotii = document.getElementsByClassName("primul-mesaj");
const reclamatii = document.getElementsByClassName("reclamatii");
const contact = document.getElementsByClassName("contact");
const feReclamatii = document.getElementById("fereastraReclamatii");
const modal = document.getElementById("modal");
const butonCos =document.getElementById("cos-cumparaturi-icon");
const cosCumparaturi = document.getElementById("cos-cumparaturi");
const inchideCos = document.getElementById("inchide-cos");
const view = document.getElementById("view");
const comanda = document.getElementById("comanda");
let btns={};
let firstLoad = true;
let textCopied = false;
let nrTelefon = "2222.222.222";
let valoareComanda = 0;

class Produs{
    nume={};
    pret={};
    src={};
    cantitate=1;
    constructor(nume,pret,src){
        this.nume =nume;
        this.pret = pret;
        this.src=src;
    }


}

function plaseza_comanda(lista=[]){
    let fso = CreateObject("Scripting.FileSystemObject");
    let a =fso.CreateTextFile("./comanda.txt",true);
    for(let i =0;i<=lista.length;i++)
    a.Close();

}

let produseInCos = [];

if(firstLoad)
{
    $("#view").load("pagini/pizza.html");
    firstLoad = false;
    btns = document.getElementsByClassName("container");
    
    
    
}


comanda.style.left = cosCumparaturi.style.left + cosCumparaturi.style.width/2 +"vw";
comanda.style.top= cosCumparaturi.style.top + cosCumparaturi.style.height+"vh";


butonCos.addEventListener('click',(e)=>{
    cosCumparaturi.style.display="flex";
    butonCos.style.display="none";
    inchideCos.style.display="flex";
    comanda.style.display="flex";
})

inchideCos.addEventListener('click',(e)=>{
    cosCumparaturi.style.display="none";
    butonCos.style.display="flex";
    inchideCos.style.display="none";
    comanda.style.display="none";
})

comanda.addEventListener('click',(e)=>{
    plaseza_comanda(produseInCos);
    produseInCos.length=0;
    cosCumparaturi.style.display="none";
    butonCos.style.display="flex";
    inchideCos.style.display="none";
    comanda.style.display="none";
})



buttons[0].addEventListener('click', (e) =>{
    $("#view").load("pagini/pizza.html"); 
    btns = document.getElementsByClassName("container");
    

})
        
buttons[1].addEventListener('click', (e) =>{
    $("#view").load("pagini/paste.html"); 
    btns = document.getElementsByClassName("container");
    

})
buttons[2].addEventListener('click', (e) =>{
    $("#view").load("pagini/salate.html");  
    btns = document.getElementsByClassName("container");
    
})
buttons[3].addEventListener('click', (e) =>{
    $("#view").load("pagini/desert.html");  
    btns = document.getElementsByClassName("container");
    
})
buttons[4].addEventListener('click', (e) =>{
    $("#view").load("pagini/bauturi.html");  
    btns = document.getElementsByClassName("container");
    
})
promotii[0].addEventListener('click', (e) =>{
    $("#view").load("pagini/promotii.html");
    btns = document.getElementsByClassName("container");   
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
    for(let i=0;i<btns.length;i++)
    {
        
        let btn = btns[i];
        btn.addEventListener('click',(e)=>{
            
                let img = btn.children[0];
                let nume = btn.children[1].innerHTML;
                let pret = parseInt(btn.children[2].innerHTML);
                let fullPath = img.src;
                let pos = fullPath.indexOf("poze");
                let partPath = fullPath.slice(pos)
                let produs = new Produs(nume,pret,partPath);
                let shouldAppend = true;
                produseInCos.forEach(function(prod){
                    if(produs.nume === prod.nume)
                    shouldAppend = false;
                })

                if(shouldAppend)
                {
                    produseInCos.push(produs);
                    let cartItem = document.createElement('div');
                    cartItem.classList.add("produs");
                    cartItem = `
                    
                    <div class="produs">
                    <img src="${produs.src}" class="img"> 
                    ${produs.nume}     
                    ${produs.pret}
                    <div>
                    
                    `;
                    $("#cos-cumparaturi").append(cartItem);
                    
                    
                }
                
             
                      
        })

             
        
    }
    
    console.log(produseInCos);
}



