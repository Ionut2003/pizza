const buttons = document.getElementsByClassName('button');
var globalVar;
buttons[0].addEventListener('click', (e) =>{
    const img = document.createElement("img");
    img.src = "/pizza.gif"
    img.width = "100";
    img.height = "100";
    document.getElementById('pizza').appendChild(img);
    globalVar = img;
})
buttons[1].addEventListener('click', (e) =>{
    globalVar.remove();
})