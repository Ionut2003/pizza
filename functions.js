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
const mediaQuery = window.matchMedia('(max-width: 600px)');
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





let produseInCos = [];

if (mediaQuery.matches) {
    const navbar1 = document.getElementsByClassName("navbar1");
    const navbar2 = document.getElementsByClassName("navbar2");
    let nav1_touched = false;
    let nav2_touched = false;
    navbar1[0].addEventListener('click', (e) =>{
        if(nav1_touched == false){
            if (nav2_touched == true){
                document.getElementsByClassName("tipuri-meniuri")[0].style.display = "none";
            }
            document.getElementById("backGround").style.display = "flex";
            document.getElementById("backGround").style.backgroundColor = "#049a86";
            document.getElementById("backGround").style.transform = "translate(-100%, 0)";
            navbar1[0].style.transform = "translate(-300%, 0)";
            navbar2[0].style.transform = "translate(-300%, 0)";
            document.getElementsByClassName("reclame")[0].style.display = "inline-block";
            nav1_touched = true;
        }
        else{
            navbar1[0].style.transform = "translate(0%)";
            navbar2[0].style.transform = "translate(0%)";
            document.getElementById("backGround").style.display = "none";
            document.getElementsByClassName("reclame")[0].style.display = "none";
            nav1_touched = false;
        }
    });
    navbar2[0].addEventListener('click', (e) =>{
        if(nav2_touched == false){
            if (nav1_touched == true){
                document.getElementsByClassName("reclame")[0].style.display = "none";
            }
            document.getElementById("backGround").style.display = "flex";
            document.getElementById("backGround").style.backgroundColor = "#d04f4c";
            document.getElementById("backGround").style.transform = "translate(-100%, 0)";
            navbar1[0].style.transform = "translate(-300%, 0)";
            navbar2[0].style.transform = "translate(-300%, 0)";
            document.getElementsByClassName("tipuri-meniuri")[0].style.display = "inline-block";
            nav2_touched = true;
        }
        else{
            navbar1[0].style.transform = "translate(0%)";
            navbar2[0].style.transform = "translate(0%)";
            document.getElementById("backGround").style.display = "none";
            document.getElementsByClassName("tipuri-meniuri")[0].style.display = "none";
            nav2_touched = false;
        }
    });
}


if(firstLoad)
{
    $("#view").load("pagini/pizza.html");
    firstLoad = false;
    btns = document.getElementsByClassName("container");
    
    
    
}



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
    cosCumparaturi.innerHTML="";
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
                    <div>
                    ${produs.nume}
                    </div>
                    <div>     
                    ${produs.pret}
                    </div>
                    </div>
                    
                    `;
                    $("#cos-cumparaturi").append(cartItem);
                    
                    
                }
                
             
                      
        })

             
        
    }
    
    console.log(produseInCos);
}



