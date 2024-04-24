var buttons = document.getElementsByClassName("button");
var telefon = document.getElementById("nr-telefon");
var butonCos =document.getElementById("cos-cumparaturi-icon");
var inchideCos = document.getElementById("inchide");
var mediaQuery = window.matchMedia("(max-width: 600px)");
var navbar1 = document.getElementsByClassName("navbar1")[0];
var navbar2 = document.getElementsByClassName("navbar2")[0];

$("#view").load("./pagini/pizza.html");

// COS CUMPARATURI 

butonCos.addEventListener("click", function() {
    document.getElementById("cos_container").style.display = "grid";
});

inchideCos.addEventListener("click", function() {
    document.getElementById("cos_container").style.display = "none";
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

// NR-TELEFON COPIED EVENT 

telefon.addEventListener('click',(event)=>{ 
    const phone_clipboard = document.getElementById("phone_clipboard");
    navigator.clipboard.writeText("222.222.2222");
    phone_clipboard.style.display = "block";
    phone_clipboard.style.left = event.clientX + 5 + "px";
    phone_clipboard.style.top = event.clientY + 5 + "px";
    setTimeout(function() {
        phone_clipboard.style.display = "none";
    }, 500);
})
