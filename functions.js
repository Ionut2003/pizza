const buttons = document.getElementsByClassName("button");
const telefon = document.getElementById("nr-telefon");
const reclamatii = document.getElementsByClassName("reclamatii");
const contact = document.getElementsByClassName("contact");
const feReclamatii = document.getElementById("fereastraReclamatii");
const modal = document.getElementById("modal");
const butonCos =document.getElementById("cos-cumparaturi-icon");
const cosCumparaturi = document.getElementById("cos-cumparaturi");
const inchideCos = document.getElementById("inchide-cos");
const view = document.getElementById("view");
const comanda = document.getElementById("comanda");
let firstLoad = true;
let textCopied = false;
let nrTelefon = "222.222.2222";
let valoareComanda = 0;
let produseInCos = [];
let mediaQuery = window.matchMedia("(max-width: 600px)");
const navbar1 = document.getElementsByClassName("navbar1")[0];
const navbar2 = document.getElementsByClassName("navbar2")[0];

$("#view").load("./pagini/pizza.html");

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

// NAVBAR 2 EVENTS


buttons[0].addEventListener('click', (e) =>{
    $("#view").load("./pagini/pizza.html"); 
    

})
        
buttons[1].addEventListener('click', (e) =>{
    $("#view").load("./pagini/paste.html"); 
    

})
buttons[2].addEventListener('click', (e) =>{
    $("#view").load("./pagini/salate.html");  
    
})
buttons[3].addEventListener('click', (e) =>{
    $("#view").load("./pagini/desert.html");  
    
})
buttons[4].addEventListener('click', (e) =>{
    $("#view").load("./pagini/bauturi.html");  
    
})

// MOBILE VERSION 

if(mediaQuery.matches) {
    let line = document.getElementsByClassName("line");
    let opened = false;
    // CLICK MENU EVENT 
    document.getElementById("menu_mobile").addEventListener("click", function(event) {
        if(!opened) {
            line[1].style.transform = "scale(0)";
            line[1].style.transition = "transform 1s ease";
            line[0].style.transformOrigin = "top left";
            line[0].style.transform = "rotate(45deg)";
            line[0].style.transition = "transform 1s ease";
            line[2].style.transformOrigin = "bottom left";
            line[2].style.transform = "rotate(-45deg)";
            line[2].style.transition = "transform 1s ease";
            document.getElementById("menu_mobile").style.transform = "translateX(-55vw)";
            document.getElementById("menu_mobile").style.transition = "transform 1s ease";
            document.getElementById("mobile_navbar").appendChild(navbar1);
            document.getElementById("mobile_navbar").appendChild(navbar2);
            navbar1.style.display = "flex";
            navbar2.style.display = "flex";
            document.getElementById("mobile_navbar").style.transform = "translateX(-55vw)";
            document.getElementById("mobile_navbar").style.transition = "transform 1s ease";
            opened = true;
        }
        else {
            document.getElementById("menu_mobile").style.transform = "translateX(0)";
            document.getElementById("menu_mobile").style.transition = "transform 1s ease";
            document.getElementById("mobile_navbar").style.transform = "translateX(0)";
            document.getElementById("mobile_navbar").style.transition = "transform 1s ease";
            line[1].style.transform = "scale(1)";
            line[1].style.transition = "transform 1s ease";
            line[0].style.transform = "rotate(0)";
            line[0].style.transition = "transform 1s ease";
            line[2].style.transform = "rotate(0)";
            line[2].style.transition = "transform 1s ease";
            setTimeout(function() {
                navbar1.style.display = "none";
                navbar2.style.display = "none";
            }, 1000);
            opened = false;
        }
        
        
        
        
    });
}





// promotii[0].addEventListener('click', (e) =>{
//     $("#view").load("./pagini/promotii.html");   
// })



// reclamatii[0].addEventListener('click', (e) =>{
//     setTimeout(function() {
//         modal.style.display="flex";
//       }, 100);
    

// })


// NR-TELEFON COPIED EVENT 

telefon.addEventListener('click',(e)=>{ 
    navigator.clipboard.writeText(nrTelefon);
})

// window.onclick = function(event){
//     if(event.target !=feReclamatii && event.target != document.getElementById("fname")
//       && event.target != document.getElementById("email")
//       && event.target != document.getElementById("mesaj"))
//     {
//         modal.style.display="none";
//     }
    // for(let i=0;i<btns.length;i++)
    // {
        
    //     let btn = btns[i];
    //     btn.addEventListener('click',(e)=>{
            
    //             let img = btn.children[0];
    //             let nume = btn.children[1].innerHTML;
    //             let pret = parseInt(btn.children[2].innerHTML);
    //             let fullPath = img.src;
    //             let pos = fullPath.indexOf("poze");
    //             let partPath = "./" + fullPath.slice(pos)
    //             let produs = new Produs(nume,pret,partPath);
    //             let shouldAppend = true;
    //             produseInCos.forEach(function(prod){
    //                 if(produs.nume === prod.nume)
    //                 shouldAppend = false;
    //             })

    //             if(shouldAppend)
    //             {
    //                 produseInCos.push(produs);
    //                 let cartItem = document.createElement('div');
    //                 cartItem.classList.add("produs");
    //                 cartItem = `
                    
    //                 <div class="produs">
    //                 <img src="${produs.src}" class="img"> 
    //                 <div>
    //                 ${produs.nume}
    //                 </div>
    //                 <div>     
    //                 ${produs.pret}
    //                 </div>
    //                 </div>
                    
    //                 `;
    //                 $("#cos-cumparaturi").append(cartItem);
                    
                    
    //             }
                
             
                      
    //     })

             
        
    // }

// }



