const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")

function generate(){
    let newArr = []
    for(let x=0;x < 8;x++){
        newArr.push(characters[Math.round(Math.random()*characters.length)])
    }
    let newArr2 = []
    for(let x=0;x < 9;x++){
        newArr2.push(characters[Math.round(Math.random()*characters.length)])
    }
    pass1.textContent = newArr.join("")
    pass2.textContent = newArr2.join("")
}